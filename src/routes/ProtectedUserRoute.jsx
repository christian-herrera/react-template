import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";


function ProtectedUserRoute() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}


export default ProtectedUserRoute;
