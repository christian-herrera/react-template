import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";

import '../styles/PrivateLayout.css';


// -------------------------------------------------------------
// --> Layout: PrivateLayout.jsx - Diseño del Layout Privado
// -------------------------------------------------------------
export default function PrivateLayout() {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <div className="layout-shell private-shell">
            <nav className="layout-nav" aria-label="Navegación privada">
                <div className="layout-nav__title">
                    <span>Plantilla privada</span>
                    <span className="layout-nav__subtitle">Área interna protegida</span>
                </div>
                <button className="button button-secondary" type="button" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    );
}