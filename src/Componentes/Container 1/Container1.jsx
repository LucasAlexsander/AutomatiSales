import React from 'react';
import styles from './Container1.module.css';
import Line from '../../../public/midia/lineH1.svg?react';

const Container1 = () => {
  return (
    <main>
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
        Reduza em 70 a 80% dos processos manuais do seu time de vendas, deixando
        eles focarem no focar no que realmente importa que é fechar vendas.
      </p>
    </main>
  );
};

export default Container1;
