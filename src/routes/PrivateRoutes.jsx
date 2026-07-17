import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Layouts
import PrivateLayout from "../layouts/PrivateLayout";

// Guardias
import ProtectedUserRoute from "./ProtectedUserRoute";

// Páginas
const PrivatePage = lazy(() => import("../pages/private/PrivatePage"));
const NotFoundPage = lazy(() => import("../pages/errors/NotFoundPage"));


function PrivateRoutes() {

    return (
        <Routes>
            <Route element={<ProtectedUserRoute />}>
                <Route element={<PrivateLayout />}>
                    <Route path="home" element={<PrivatePage />} />
                </Route>
            </Route>

            {/* 404 global sin layout */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}


export default PrivateRoutes;