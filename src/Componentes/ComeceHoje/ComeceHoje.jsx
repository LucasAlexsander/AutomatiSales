import React from 'react';
import styles from './ComeceHoje.module.css';

const ComeceHoje = () => {
  return (
    <section className={`${styles.comeceHoje} bgSection`}>
      <div className={styles.container}>
        <h3>Comece hoje mesmo</h3>
        <p>
          É hora de tomar conta do seu tempo e do seu processo para ser sempre
          assertivo e nada melhor que uma automação integrada para te ajudar
          nisso!
        </p>
        <a href="#" className={styles.btnConsultor}>
          Fale com um consultor
        </a>
      </div>
    </section>
  );
};

export default ComeceHoje;
