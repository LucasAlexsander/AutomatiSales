import React from 'react';
import styles from './Container1.module.css';
import Line from '../../../public/midia/lineH1.svg?react';
import bg1 from '../../../public/midia/bgMain1.png';
import bg2 from '../../../public/midia/bgMain2.png';

const Container1 = () => {
  return (
    <main>
      <div className={styles.text}>
        <h1>
          Liberte o potencial do seu time de vendas!{' '}
          <span>
            Automatize
            <Line />
          </span>{' '}
          processos repetitivos e chatos para que eles possam focar no que
          realmente importa que é fechar vendas.
        </h1>
        <p>
          Reduza em 70 a 80% dos processos manuais do seu time de vendas,
          deixando eles focarem no que realmente importa que é fechar vendas.
        </p>
      </div>

      <div className={styles.backgrounds}>
        <img src={bg1} alt="" />
        <img src={bg2} alt="" />

        {/* <img src={bg1} alt="" />
        <img src={bg2} alt="" /> */}
      </div>
    </main>
  );
};

export default Container1;
