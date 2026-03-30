import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  const formatearMoneda = (valor) => valor.toLocaleString('es-CL');

  return (
    <nav id="barra-navegacion" className="navbar-contenedor">
      <div className="navbar-seccion-izquierda">
        <span className="navbar-logo">Pizzería Mamma Mia!</span>
        <button className="boton-nav">🍕 Home</button>
        {token ? (
          <>
            <button className="boton-nav">🔓 Profile</button>
            <button className="boton-nav">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="boton-nav">🔐 Login</button>
            <button className="boton-nav">🔐 Register</button>
          </>
        )}
      </div>
      <div className="navbar-seccion-derecha">
        <button className="boton-total">🛒 Total: ${formatearMoneda(total)}</button>
      </div>
    </nav>
  );
};

export default Navbar;