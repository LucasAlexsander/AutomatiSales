import React from 'react';
import logo from '../../../public/midia/Logo/logo automatisales-HD.png';
import styles from './Header.module.css';
import { Link, useLocation, useParams } from 'react-router-dom';

const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [urls, setUrls] = React.useState([
    { nome: 'Nosso Diferecial', path: '' },
    { nome: 'Nossos Clientes', path: '' },
    { nome: 'Dúvidas Frequentes', path: '' },
    { nome: 'Principais Plataformas', path: '' },
  ]);

  const location = useLocation();

  React.useEffect(() => {}, []);

  console.log(location.pathname);

  const toogleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header>
      {location.pathname === '/' ? (
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className={styles.menuDesk}>
            <ul>
              <li>
                <a href="/#diferencial">Nosso Diferecial</a>
              </li>
              <li>
                <a href="/#clientes">Nossos Clientes</a>
              </li>
              <li>
                <a href="/#fac">Dúvidas Frequentes</a>
              </li>
              <li>
                <a href="/#plataformas">Principais Plataformas</a>
              </li>

              <li className={styles.button}>
                <Link to="/consultor">Fale com um consultor</Link>
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
                    <a href="/#diferencial">Nosso Diferecial</a>
                  </li>
                  <li>
                    <a href="/#clientes">Nossos Clientes</a>
                  </li>
                  <li>
                    <a href="/#fac">Dúvidas Frequentes</a>
                  </li>
                  <li>
                    <a href="/#plataformas">Principais Plataformas</a>
                  </li>

                  <li className={styles.button}>
                    <Link to="/consultor">Fale com um consultor</Link>
                  </li>
                </ul>
              </nav>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div className={styles.containerLogo}>
          <div className={styles.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
