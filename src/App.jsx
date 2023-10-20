import { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Consultor from './Componentes/Consultor/Consultor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultor" element={<Consultor />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
