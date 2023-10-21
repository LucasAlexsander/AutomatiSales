import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Agradecimento.module.css';

const Agradecimento = () => {
  return (
    <div className={styles.agradecimentoSection}>
      <div className={styles.container}>
        <h1>Obrigado por se inscrever!</h1>
        <p>Em breve entraremos em contato.</p>
        <Link to="/">Voltar para a página inicial.</Link>
      </div>
    </div>
  );
};

export default Agradecimento;
