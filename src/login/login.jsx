import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

function Login() {
  const [user, setUser] = useState("");
  const [clave, setClave] = useState("");
  const navegar = useNavigate();

  
  const usuarios = [
    { user: "admin", clave: "1234", role: "admin" },
    { user: "user", clave: "1234", role: "user" },
    { user: "gen", clave: "1234", role: "user" },
  ];

  function validar(event) {
    event.preventDefault();
    const usuario = usuarios.find(u => u.user === user && u.clave === clave);
    if (usuario) {
      if (usuario.role === "admin") {
        navegar("/solicitudes");
      } else if (usuario.role === "user") {
        navegar("/inicio");
      } else {
        alert("Rol no reconocido.");
      }
    } else {
      alert("Usuario o Contraseña incorrectos.");
    }
  }

  return (
    <>
      <div>
        <img className="banner" src="https://media.licdn.com/dms/image/D4E3DAQHtLvdyD8Eo_w/image-scale_191_1128/0/1689693829992/cediaec_cover?e=2147483647&v=beta&t=EN9695sQ-SM9i-6QKfnkfTxNifhYvfHyUIForQVEoYg" alt="" />
      </div>
      <div className="d-flex vh-50 login-container justify-content-center align-items-center">
        <div className="p-3 w-25">
          <div className="form-login">
            <form onSubmit={validar}>
              <div className="input-login">
                <label htmlFor="username" className="label-login">Username</label><br />
                <input
                  type="text"
                  placeholder="Ingresa tu Username"
                  onChange={(event) => setUser(event.target.value)}
                />
              </div>
              <div className="input-login">
                <label htmlFor="password" className="label-login">Password</label><br />
                <input
                  type="password"
                  placeholder="Ingresa tu Password"
                  onChange={(event) => setClave(event.target.value)}
                />
              </div>
              <div className="boton-iniciarsesion">
                <button className="btn btn-secondary">Iniciar Sesion</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <hr />
      <footer>
        <p>2024 - CEDIA</p>
      </footer>
    </>
  );
}

export default Login;
