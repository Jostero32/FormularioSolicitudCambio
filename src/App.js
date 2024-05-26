import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Solicitudes from './paginas/solicitudes'; // Importa el componente con el nombre correcto del archivo
import './App.css';

function App() {
    const [solicitudes, setSolicitudes] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Inicio solicitudes={solicitudes} setSolicitudes={setSolicitudes} />} />
                    <Route path="/solicitudes" element={<Solicitudes solicitudes={solicitudes} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
