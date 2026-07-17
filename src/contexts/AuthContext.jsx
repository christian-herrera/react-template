import { createContext, useContext, useEffect, useState } from "react";

// Creo el contexto de autenticación
const AuthContext = createContext();


// Hook personalizado para usar el contexto. Se utiliza como:
// import { useAuth } from '...../AuthContext';
// const { isAuth, user, login, logout } = useAuth();
export const useAuth = () => useContext(AuthContext);


// -------------------------------------------------------
// --> Provider: AuthProvider
// Provee el contexto de autenticación.
// -------------------------------------------------------
export default function AuthProvider({ children }) {
    // Leo o establezco el estado inicial del usuario desde sessionStorage
    const [userData, setUserData] = useState(() => {
        const saved = sessionStorage.getItem("user"); // {"user": "xxxx", "rol": "admin|user"}
        return saved ? JSON.parse(saved) : null;
    });

    // Cada vez que userData cambia, lo guardo en sessionStorage
    useEffect(() => {
        if (userData) sessionStorage.setItem("user", JSON.stringify(userData));
        else sessionStorage.removeItem("user");
    }, [userData]);



    // --> Hook: Login
    async function login(user) {
        setUserData({ user, rol: "admin" });
        return {success: true, message: "Usuario autenticado"};
    }

    // --> Hook: Logout
    async function logout() {
        setUserData(null);
        console.log("Usuario desconectado");
    }


    return (
        <AuthContext.Provider
            value={{
                login, logout,
                user : userData?.user || null,
                isAuthenticated: userData !== null
            }} >
            {children}
        </AuthContext.Provider>
    )

}