import React from 'react';
import styles from './Parceiros.module.css';
import logo from '../../../public/midia/Make Logo/Silver.jpg';

const Parceiros = () => {
  return (
    <section className={`${styles.sectionParceiros}`}>
      <div className="sectionTitle">
        <h3>Nosso parceiro de soluções</h3>
        <p>Nos unimos ao que acreditamos serem as melhores soluções</p>
      </div>
      <div className={styles.parceiros}>
        <img src={logo} alt="" />
      </div>
    </section>
  );
};

export default Parceiros;
