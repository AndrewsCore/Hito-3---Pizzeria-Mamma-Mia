import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

// --- COMPONENTE PRINCIPAL: HOME ---
const Home = () => {
  return (
    <main id="contenido-inicio">
      <Header />
      <div className="contenedor-grilla-pizzas">
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="src/assets/pizza-1.jpg"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="src/assets/pizza-2.jpg"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="src/assets/pizza-3.jpg"
        />
      </div>
    </main>
  );
};

export default Home;