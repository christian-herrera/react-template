import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

// --------------------------------------------------------------
// ==> AppRouter.jsx - Configuración de Rutas
// --------------------------------------------------------------
function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Rutas Privadas */}
                <Route path="/private/*" element={<PrivateRoutes />} />
                
                
                {/* Rutas públicas */}
                <Route path="/*" element={<PublicRoutes />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;