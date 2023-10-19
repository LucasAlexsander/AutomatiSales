import React from 'react';
import styles from './Plataformas.module.css';

import activeCamping from '../../../public/midia/Integração/activeCampaing.png';
import apollo from '../../../public/midia/Integração/apollo.png';
import botConversa from '../../../public/midia/Integração/botConversa.png';
import chatGPT from '../../../public/midia/Integração/chatGPT.png';
import chatGuru from '../../../public/midia/Integração/chatGuru.png';
import duxSoup from '../../../public/midia/Integração/duxSoup.png';
import gmail from '../../../public/midia/Integração/gmail.png';
import googleAnalytics from '../../../public/midia/Integração/googleAnalytics.png';
import googleDrive from '../../../public/midia/Integração/googleDrive.png';
import googleSheets from '../../../public/midia/Integração/googleSheets.png';
import googleSlides from '../../../public/midia/Integração/googleSlides.png';
import hubSpit from '../../../public/midia/Integração/hubSpit.png';
import Kommo from '../../../public/midia/Integração/Kommo.png';
import pipedrive from '../../../public/midia/Integração/pipedrive.png';
import pipefy from '../../../public/midia/Integração/pipefy.png';
import rdSatation from '../../../public/midia/Integração/rdSatation.jpg';
import receitaws from '../../../public/midia/Integração/receitaws.png';
import salesForce from '../../../public/midia/Integração/salesForce.png';
import slack from '../../../public/midia/Integração/slack.png';
import snov from '../../../public/midia/Integração/snov.png';
import zapSign from '../../../public/midia/Integração/zapSign.png';

const importsIcons = [
  { icon: activeCamping },
  { icon: apollo },
  { icon: botConversa },
  { icon: chatGPT },
  { icon: chatGuru },
  { icon: duxSoup },
  { icon: gmail },
  { icon: googleAnalytics },
  { icon: googleDrive },
  { icon: googleSheets },
  { icon: googleSlides },
  { icon: hubSpit },
  { icon: Kommo },
  { icon: pipedrive },
  { icon: pipefy },
  { icon: rdSatation },
  { icon: receitaws },
  { icon: salesForce },
  { icon: slack },
  { icon: snov },
  { icon: zapSign },
];

const Plataformas = () => {
  return (
    <section id="plataformas">
      <div className="sectionTitle">
        <h3>Algumas plataformas que conseguimos integrar</h3>
        <p>
          Veja abaixo os principais softwares que podemos conectar e automatizar
        </p>
      </div>

      <div className={styles.plataformasIcons}>
        {importsIcons.map(({ icon }, index) => (
          <img key={index} src={icon} alt="Icone da empresa" />
        ))}
      </div>
    </section>
  );
};

export default Plataformas;
