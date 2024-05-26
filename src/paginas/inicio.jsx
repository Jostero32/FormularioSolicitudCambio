import React, { useState, useEffect } from 'react';
import Navbar from './Navbar.jsx';
import './inicio.css';

function Inicio() {
    const [texto, setTexto] = useState("");
    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");
    const [boolPrioridarUrgente, setPrioridadUrgente] = useState(false);
    const [boolPrioridarNormal, setPrioridadNormal] = useState(false);
    const [boolPrioridarEstandar, setPrioridadEstandar] = useState(true);
    const [solicitudes, setSolicitudes] = useState([]);
    useEffect(() => {
        // Cargar datos del localStorage al inicio
        const storedSolicitudes = JSON.parse(localStorage.getItem('solicitudes'));
        if (storedSolicitudes) {
            setSolicitudes(storedSolicitudes);
        }
    }, []);
    
    const cambiarValorRadioButton = (id) => {
        if (id === 1) {
            setPrioridadUrgente(false);
            setPrioridadNormal(false);
            setPrioridadEstandar(true);
            return;
        } else if (id === 2) {
            setPrioridadUrgente(false);
            setPrioridadNormal(true);
            setPrioridadEstandar(false);
            return;
        }
        setPrioridadUrgente(true);
        setPrioridadNormal(false);
        setPrioridadEstandar(false);
    }

    const agregarSolicitud = () => {
        const nuevaSolicitud = { nombre: texto, descripcion: texto1, fecha: texto2 , estado: "Pendiente" };
        setSolicitudes([...solicitudes, nuevaSolicitud]);
        console.log(solicitudes);
        // Guardar datos en localStorage
        localStorage.setItem('solicitudes', JSON.stringify([...solicitudes, nuevaSolicitud]));
    }
    

    return (
        <div>
            <Navbar></Navbar>
            <h1>Solicitud de cambio</h1>
            <form onSubmit={(event) => {
                event.preventDefault();
                agregarSolicitud();
            }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Fecha</h4>
                        </div>
                        <div className='col-2'>
                            <input type="date" onChange={(event) => setTexto2(event.target.value)} />
                        </div>
                        <div className='col-4'>
                            <h4>Nombre del solicitante</h4>
                        </div>
                        <div className='col-2'>
                            <input type="text" placeholder='Ingrese su nombre' onChange={(event) => setTexto(event.target.value)} />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Nombre del proyecto</h4>
                        </div>
                        <div className='col-2'>
                            <input type="text" />
                        </div>
                        <div className='col-4'>
                            <h4>Descripcion del cambio</h4>
                        </div>
                        <div className='col-2'>
                            <textarea name="a" id="" onChange={(event) => setTexto1(event.target.value)}></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Justificación del cambio</h4>
                        </div>
                        <div className='col-2'>
                            <textarea name="a" id=""></textarea>
                        </div>
                        <div className='col-4'>
                            <h4>D</h4>
                        </div>
                        <div className='col-2'>
                            <textarea name="a" id=""></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Prioridad</h4>
                        </div>
                        <div className='col-2'>
                            <input type="radio" onClick={() => cambiarValorRadioButton(1)} checked={boolPrioridarEstandar} />Estandar <br />
                            <input type="radio" onClick={() => cambiarValorRadioButton(2)} checked={boolPrioridarNormal} />Normal <br />
                            <input type="radio" onClick={() => cambiarValorRadioButton(3)} checked={boolPrioridarUrgente} />Urgente <br />
  </div>
                    </div>
                </div>
                <button>Agregar</button>
            </form>
         
       
            <h2>Solicitudes de Cambio</h2>

            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del Solicitante</th>
                            <th>Fecha de Emisión</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>001</td>
                            <td>Sandra Véjar</td>
                            <td>21/06/2015</td>
                            <td>Pendiente</td>
                        </tr>
                        {solicitudes.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <th>{key}</th>
                                    <th scope="row">{val.nombre}</th>
                                    <td>{val.fecha}</td>
                                    <td>{val.estado}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Inicio;
