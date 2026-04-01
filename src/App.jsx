import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Registro from './components/Registro';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="app-pizzeria">
      <Navbar />  
      {/*<Home />*/}
     <Registro />
      {/*<Login />*/}
      <Footer />
    </div>
  );
}

export default App;