import { useEffect, useState } from 'react';

// Estilos
import '../../styles/PrivatePage.css';

// Hooks
import useSupabase from '../../lib/hooks/useSupabase';


/**
 * --------------------------------------------------------------
 * ==> PrivatePage.jsx - Página de inicio privada
 * --------------------------------------------------------------
 */
export default function PrivatePage() {
    const { getRows } = useSupabase(); // Hook
    const [rows, setRows] = useState([]);

    // --> Utilidad: Función para obtener los datos de la base de datos
    async function fetchData() {
        const result = await getRows();

        if (!result.error) {
            setRows(result.data || []);
        } else {
            setRows([{ item: 'Error al obtener los datos!' }]);
        }
    }

    // --> Utilidad: Efecto para obtener los datos al montar el componente
    useEffect(() => {
        fetchData();
    }, []);

    // --> RENDERIZADO
    return (
        <section className="private-card">
            <span className="layout-badge">Área privada</span>
            <div>
                <h1>Bienvenido a la página privada</h1>
                <p>Este espacio representa el interior de la aplicación después del acceso.</p>
            </div>
            <ul className="private-card__list">
                {rows.length === 0 ? (
                    <li>No hay datos disponibles</li>
                ) : (
                    rows.map((row, index) => (
                        <li key={index}>{row.item}</li>
                    )))}
            </ul>
        </section>
    );
}