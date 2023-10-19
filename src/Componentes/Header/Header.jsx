import React from 'react';
import logo from '../../../public/midia/Logo/logo automatisales-HD.png';
import styles from './Header.module.css';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <nav className={styles.menuDesk}>
          <ul>
            <li>
              <a href="#diferencial">Nosso Diferecial</a>
            </li>
            <li>
              <a href="#clientes">Nossos Clientes</a>
            </li>
            <li>
              <a href="#fac">Dúvidas Frequentes</a>
            </li>
            <li>
              <a href="#plataformas">Principais Plataformas</a>
            </li>

            <li className={styles.button}>
              <a href="#">Fale com um consultor</a>
            </li>
          </ul>
        </nav>
        <div className={styles.menuBurguer}>
          <div className={styles.icon} onClick={() => toogleMenu()}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {openMenu ? (
            <nav className={styles.menuMobile}>
              <ul>
                <li>
                  <a href="#">Nosso Diferecial</a>
                </li>
                <li>
                  <a href="#">Nossos Clientes</a>
                </li>
                <li>
                  <a href="#">Dúvidas Frequentes</a>
                </li>
                <li>
                  <a href="#">Principais Plataformas</a>
                </li>

                <li className={styles.button}>
                  <a href="#">Fale com um consultor</a>
                </li>
              </ul>
            </nav>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
