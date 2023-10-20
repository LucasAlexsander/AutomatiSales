import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Container1 from './Componentes/Container 1/Container1';
import Container2 from './Componentes/Container 2/Container2';
import Container3 from './Componentes/Container 3/Container3';
import ComeceHoje from './Componentes/ComeceHoje/ComeceHoje';
import Clientes from './Componentes/Clientes/Clientes';
import Parceiros from './Componentes/Parceiros/Parceiros';
import Plataformas from './Componentes/Plataformas/Plataformas';
import Fac from './Componentes/FAC/Fac';

const Index = () => {
  return (
    <>
      <Container1 />
      <Container2 />
      <Container3 />
      <ComeceHoje />
      <Clientes />
      <Parceiros />
      <Plataformas />
      <Fac />
    </>
  );
};

export default Index;
