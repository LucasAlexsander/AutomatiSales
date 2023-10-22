import React from 'react';
import styles from './Footer.module.css';
import IconInsta from '../../../public/midia/Icons/Insta.svg?react';
import IconLinkedin from '../../../public/midia/Icons/linkedin.svg?react';
import IconFacebook from '../../../public/midia/Icons/facebook.svg?react';
import IconMake from '../../../public/midia/Icons/make.svg?react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className={styles.patern}>
        <p>Parceira Oficial</p>
        <span></span>
        <IconMake className={styles.a} />
      </div>

      <div className={styles.end}>
        <p>Copyright © 2023. Todos os direitos reservados</p>
        <div className={styles.social}>
          <Link
            to="https://www.instagram.com/automatisales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconInsta />
          </Link>
          <a
            href="https://www.linkedin.com/company/automatisales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedin />
          </a>
          <a
            href="https://www.facebook.com/automatisales"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
