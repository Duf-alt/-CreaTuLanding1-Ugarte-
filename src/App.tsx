import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <main style={{ padding: '20px' }}>
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </main>
    </>
  );
};

export default App;
