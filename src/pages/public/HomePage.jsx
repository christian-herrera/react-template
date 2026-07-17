import { useNavigate } from "react-router-dom";

import '../../styles/HomePage.css';

/**
 * --------------------------------------------------------------
 * ==> HomePage.jsx - Página de inicio pública
 * --------------------------------------------------------------
 */
export default function HomePage() {
    const navigate = useNavigate();


    // --> RENDERIZADO
    return (
        <section className="hero">
            <div className="hero__card">
                <span className="page-tag">Plantilla pública</span>
                <div>
                    <h1>Bienvenido a la página de inicio</h1>
                    <p>Un espacio simple para presentar el proyecto y entrar al flujo principal.</p>
                </div>
                <div className="hero__actions">
                    <button className="button" onClick={() => navigate('/login')}>Ir al login</button>
                    <button className="button button-secondary" type="button" onClick={() => navigate('/private/home')}>Ver área privada</button>
                </div>
            </div>
        </section>
    );
}