import React from 'react';
import CartWidget from './CartWidget';

const NavBar: React.FC = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', backgroundColor: '#333', color: '#fff' }}>
      <div style={{ fontWeight: 'bold' }}>MiTienda</div>
      <div style={{ display: 'flex', gap: '15px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
