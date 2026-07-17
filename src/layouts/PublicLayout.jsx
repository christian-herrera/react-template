import { Outlet } from "react-router-dom";

import '../styles/PublicLayout.css';


// -------------------------------------------------------------
// --> Layout: PublicLayout.jsx - Diseño del Layout Público
// -------------------------------------------------------------
export default function PublicLayout() {
    return (
        <div className="layout-shell public-shell">
            <nav className="layout-nav" aria-label="Navegación pública">
                <div className="layout-nav__title">
                    <span>Plantilla pública</span>
                    <span className="layout-nav__subtitle">Vista de bienvenida y acceso</span>
                </div>
                <span className="layout-badge">Public</span>
            </nav>
            <main className="layout-main">
                <Outlet />
            </main>
        </div>
    );
}