import React from 'react';
import { Link } from 'react-router-dom';

const Agradecimento = () => {
  return (
    <div>
      <h1>Obrigado por se inscrever!</h1>
      <p>Em breve enraremos em contato.</p>
      <Link to="/">Voltar para a página inicial.</Link>
    </div>
  );
};

export default Agradecimento;
