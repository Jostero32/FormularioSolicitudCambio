import React, { useState, useEffect } from 'react';
import { Navbar, NavbarAgregar } from './Navbar.jsx';
import './inicio.css';
import DescargarPDFButton from './doPDF.jsx';

function Inicio() {
    const [texto, setTexto] = useState("");
    const [texto1, setTexto1] = useState("");
    const [texto2, setTexto2] = useState("");
    const [nombreProyecto, setNombreProyecto] = useState("");
    const [justificacion, setJustificacion] = useState("");
    const [prioridad, setPrioridad] = useState("");
    const [impacto, setImpacto] = useState("");
    const [correo, setCorreo] = useState("");
    const [departamento, setDepartamento] = useState("");
    const [areaSoftware, setAreaSoftware] = useState("");
    const [boolPrioridarUrgente, setPrioridadUrgente] = useState(false);
    const [boolPrioridarNormal, setPrioridadNormal] = useState(false);
    const [boolPrioridarEstandar, setPrioridadEstandar] = useState(true);
    const [bool1, set1] = useState(false);
    const [bool2, set2] = useState(false);
    const [bool3, set3] = useState(true);
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
    const cambiarValorRadioButton1 = (id) => {
        if (id === 1) {
            set1(false);
            set2(false);
            set3(true);
            return;
        } else if (id === 2) {
            set1(false);
            set2(true);
            set3(false);
            return;
        }
        set1(true);
        set2(false);
        set3(false);
    }
    const agregarSolicitud = () => {
        const nuevaSolicitud = { nombre: texto, descripcion: texto1, fecha: texto2, estado: "Pendiente", nombreProyecto: nombreProyecto, justificacion: justificacion, prioridad: prioridad ,impacto: impacto,areaSoftware:areaSoftware, departamento:departamento,correo:correo};
        setSolicitudes([...solicitudes, nuevaSolicitud]);
        console.log(solicitudes);
        // Guardar datos en localStorage
        localStorage.setItem('solicitudes', JSON.stringify([...solicitudes, nuevaSolicitud]));
    }


    return (

        <div>
            <div>
                <img className="banner" src="https://media.licdn.com/dms/image/D4E3DAQHtLvdyD8Eo_w/image-scale_191_1128/0/1689693829992/cediaec_cover?e=2147483647&v=beta&t=EN9695sQ-SM9i-6QKfnkfTxNifhYvfHyUIForQVEoYg" alt="" />
            </div>
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
                            <h4>Correo</h4>
                        </div>
                        <div className='col-2'>
                            <input type="text"placeholder='Ingrese su correo' onChange={(event) => setCorreo(event.target.value)} />
                        </div>
                        <div className='col-4'>
                            <h4>Departamento</h4>
                        </div>
                        <div className='col-2'>
                            <input type="text" placeholder='Ingrese el departamento' onChange={(event) => setDepartamento(event.target.value)} />
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-4'>
                            <h4>Nombre del proyecto</h4>
                        </div>
                        <div className='col-2'>
                            <input type="text" placeholder="Ingrese el nombre del proyecto" onChange={(event) => setNombreProyecto(event.target.value)} />
                        </div>
                        <div className='col-4'>
                            <h4>Descripcion del cambio</h4>
                        </div>
                        <div className='col-2'>
                            <textarea name="a" id="" placeholder="Ingrese la descripción del cambio" onChange={(event) => setTexto1(event.target.value)}></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Justificación del cambio</h4>
                        </div>
                        <div className='col-2'>
                            <textarea id="" placeholder="Ingrese la justificación" onChange={(event) => setJustificacion(event.target.value)}></textarea>
                        </div>
                        <div className='col-4'>
                            <h4>Area del software</h4>
                        </div>
                        <div className='col-2'>
                            <textarea id="" placeholder="Ingrese el area donde se escuentra el cambio"onChange={(event) => setAreaSoftware(event.target.value)}></textarea>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <h4>Prioridad</h4>
                        </div>
                        <div className='col-2'>
                            <input type="radio" onClick={() => { cambiarValorRadioButton(1); setPrioridad("Estandar") }} checked={boolPrioridarEstandar} />Estandar <br />
                            <input type="radio" onClick={() => { cambiarValorRadioButton(2); setPrioridad("Normal") }} checked={boolPrioridarNormal} />Normal <br />
                            <input type="radio" onClick={() => { cambiarValorRadioButton(3); setPrioridad("Urgente") }} checked={boolPrioridarUrgente} />Urgente <br />
                        </div>
                        <div className='col-4'>
                            <h4>Impacto</h4>
                        </div>
                        <div className='col-2'>
                            <input type="radio" onClick={() => { cambiarValorRadioButton1(3);setImpacto("Bajo")  }} checked={bool1} />Bajo <br />
                            <input type="radio" onClick={() => { cambiarValorRadioButton1(2) ;setImpacto("Medio") }} checked={bool2} />Medio <br />
                            <input type="radio" onClick={() => { cambiarValorRadioButton1(1) ;setImpacto("Alto") }} checked={bool3} />Alto <br />
                        </div>
                    </div>
                </div>
                <NavbarAgregar />
            </form>


            <h2>Solicitudes de Cambio</h2>

            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre del Proyecto</th>
                            <th>Prioridad</th>
                            <th>Nombre del Solicitante</th>
                            <th>Fecha de Emisión</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>

                        {solicitudes.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <th>{key + 1}</th>
                                    <th scope="row">{val.nombreProyecto}</th>
                                    <th>{val.prioridad}</th>
                                    <th scope="row">{val.nombre}</th>
                                    <td>{val.fecha}</td>
                                    <td>{val.estado}
                                    </td>
                                    <td> <DescargarPDFButton solicitud={{ ...val, id: key + 1 }} />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <footer>
                <p>2024 - CEDIA</p>
            </footer>
        </div>

    )
}

export default Inicio;
