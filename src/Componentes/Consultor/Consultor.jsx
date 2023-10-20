import React from 'react';
import styles from './Consultor.module.css';
import Formulario from './Form/Formulario';

const caracteristicas = [
  {
    title: 'Organização de processos',
    icon: '../../../public/midia/Icons/Forms/browser.svg',
  },
  {
    title: 'Agilidade na execução',
    icon: '../../../public/midia/Icons/Forms/arrowRight.svg',
  },
  {
    title: 'Visibilidade do desempenho',
    icon: '../../../public/midia/Icons/Forms/graph.svg',
  },
  {
    title: 'Retorno sobre o investimento',
    icon: '../../../public/midia/Icons/Forms/money.svg',
  },
];

const Consultor = () => {
  return (
    <main className={styles.mainForm}>
      <div className={styles.textArea}>
        <h1>Transforme seu time de vendas!</h1>
        <p className={styles.desc}>
          A AutomatiSales é seu braço direito na organização, execução e
          otimização do seu processo venda.
        </p>
        <div className={styles.caracteristicas}>
          {caracteristicas.map(({ title, icon }) => (
            <div key={title} className={styles.item}>
              <img src={icon} alt={`Icone de ${title}`} />
              <p>{title}</p>
            </div>
          ))}
        </div>
        <p>Estamos juntos com empresas que transformam o mercado</p>
      </div>
      <div className={styles.formularioArea}>
        <h2>
          Nós fazemos uma análise do perfil e entramos em contato para
          encontramos a melhor solução
        </h2>
        <Formulario />
      </div>
    </main>
  );
};

export default Consultor;
