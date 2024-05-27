import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css'; // Asegúrate de importar tu archivo CSS

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="spacer"></li> {/* Este elemento empuja el botón hacia la derecha */}
        <li>
          <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

function NavbarAgregar() {

  return (
    <nav className="custom-navbar">
      <ul className="navbar-items">
        <li>
          <button  className="action-button">Agregar</button>
        </li>
      </ul>
    </nav>
  );
}


export  {Navbar,NavbarAgregar};
