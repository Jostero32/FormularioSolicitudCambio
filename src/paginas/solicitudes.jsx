import React, { useEffect, useState } from 'react';

function Solicitudes() {
    const [solicitudes, setSolicitudes] = useState([]);

    useEffect(() => {
        // Cargar datos del localStorage al inicio
        const storedSolicitudes = JSON.parse(localStorage.getItem('solicitudes'));
        if (storedSolicitudes) {
            setSolicitudes(storedSolicitudes);
        }
    }, []);

    const handleAceptar = (key) => {
        const updatedSolicitudes = solicitudes.map((solicitud, index) => {
            if (index === key) {
               
                return { ...solicitud, estado: 'Aceptado' };
            }
            return solicitud;
        });
        // Actualizar el estado y el localStorage
        setSolicitudes(updatedSolicitudes);
        localStorage.setItem('solicitudes', JSON.stringify(updatedSolicitudes));
    };

    const handleCancelar = (key) => {
        const updatedSolicitudes = solicitudes.map((solicitud, index) => {
            if (index === key) {
               
                return { ...solicitud, estado: 'Cancelado' };
            }
            return solicitud;
        });
        // Actualizar el estado y el localStorage
        setSolicitudes(updatedSolicitudes);
        localStorage.setItem('solicitudes', JSON.stringify(updatedSolicitudes));
    };

    return (

        <>
        <div>
        <div>
        <img className="banner" src="https://www.uta.edu.ec/v3.2/uta/images/header.png" alt="" />
      </div>
            <h2>Solicitudes de Cambio</h2>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Prioridad</th>
                            <th>Nombre del Proyecto</th>
                            <th>Nombre del Solicitante</th>
                            <th>Fecha de Emisión</th>
                            <th>Descripción</th>
                            <th>Justificación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {solicitudes.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <th>{key + 1}</th>
                                    <th>{val.prioridad}</th>
                                    <th>{val.nombreProyecto}</th>
                                    <td>{val.nombre}</td>
                                    <td>{val.fecha}</td>
                                    <td>{val.descripcion}</td>
                                    <td>{val.justificacion}</td>
                                    <td>
                                        <button onClick={() => handleAceptar(key)}>Aceptar</button>
                                        <button onClick={() => handleCancelar(key)}>Denegar</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        <footer>
        <p>2024 - UTA</p>
      </footer>
        </>
    );
}

export default Solicitudes;
