
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/login.jsx';
import Inicio from './paginas/inicio.jsx';
import Solicitudes from './paginas/solicitudes'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/solicitudes" element={<Solicitudes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

export default App;
