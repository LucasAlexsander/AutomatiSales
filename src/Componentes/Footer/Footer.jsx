import React from 'react';
import styles from './Footer.module.css';
import IconInsta from '../../../public/midia/Icons/Insta.svg?react';
import IconLinkedin from '../../../public/midia/Icons/linkedin.svg?react';
import IconFacebook from '../../../public/midia/Icons/facebook.svg?react';
import IconMake from '../../../public/midia/Icons/make.svg?react';

const Footer = () => {
  return (
    <footer>
      <div className={styles.patern}>
        <p>Principal Parceiro</p>
        <span></span>
        <IconMake className={styles.a} />
      </div>

      <div className={styles.end}>
        <p>Copyright © 2023. Todos os direitos reservados</p>
        <div className={styles.social}>
          <a href="#">
            <IconInsta />
          </a>
          <a href="#">
            <IconLinkedin />
          </a>
          <a href="#">
            <IconFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
