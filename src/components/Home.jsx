import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from './pizzas'; // Importamos el array de pizzas local

const Home = () => {
  return (
    <main>
      <Header />
      <div className="contenedor-grilla-pizzas">
        {/* Mapeamos el array de pizzas para renderizar cada CardPizza */}
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;