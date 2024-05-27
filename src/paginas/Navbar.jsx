import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <nav>
      <ul>

        <li>
          <button onClick={handleLogout}>Cerrar Sesión</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
