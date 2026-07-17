import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Layouts
import PublicLayout from "../layouts/PublicLayout";

// Páginas
const HomePage = lazy(() => import("../pages/public/HomePage"));
const LoginPage = lazy(() => import("../pages/public/LoginPage"));
const NotFoundPage = lazy(() => import("../pages/errors/NotFoundPage"));


function PublicRoutes() {

    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            {/* 404 global sin layout */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}


export default PublicRoutes;