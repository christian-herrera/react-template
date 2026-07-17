import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// se asume que existe un context en src/context/login que exporta el contexto
import { useAuth } from "../../contexts/AuthContext";

import '../../styles/LoginPage.css';

export default function LoginPage() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const { login } = useAuth();

    // --> Handle: Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username) return;
        const result = await login(username);
        if (result.success) {
            navigate("/private/home");
        }
    };

    // --> RENDERIZADO
    return (
        <section className="page-card login-card">
            <div className="login-card__header">
                <span className="page-tag">Acceso público</span>
                <h1>Iniciar sesión</h1>
                <p>Ingresa con un nombre para entrar a la parte privada de ejemplo.</p>
            </div>

            <form className="login-card__form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Usuario</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Tu usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="login-card__actions">
                    <button className="button" type="submit">Entrar</button>
                </div>
            </form>
        </section>
    );
}