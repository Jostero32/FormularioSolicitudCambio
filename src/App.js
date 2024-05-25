import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/login.jsx';
import Inicio from './paginas/inicio.jsx';
//aqui le importas tu pantalla  

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/inicio" element={<Inicio />} />
          //aqui le traes a donde te va a llevar 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
