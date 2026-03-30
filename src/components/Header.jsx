import React from 'react';

const Header = () => {
  return (
    <header id="cabecera-principal" className="header-fondo">
      <div className="header-capa-oscura">
        <h1 className="header-titulo">¡Pizzería Mamma Mia!</h1>
        <p className="header-descripcion">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        <hr className="header-separador" />
      </div>
    </header>
  );
};

export default Header;