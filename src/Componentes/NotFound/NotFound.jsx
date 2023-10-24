import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import FaceNotFound from '../../../public/midia/Icons/FaceNotFound.svg?react';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <div className={styles.container}>
        <div className={styles.img}>
          <FaceNotFound />
          <span>404</span>
        </div>
        <h1>Pagina não encontrada!</h1>
        <p>
          A página que você esta procurando não existe ou não esta disponivel.
        </p>
        <Link to="/">Voltar para a página inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
