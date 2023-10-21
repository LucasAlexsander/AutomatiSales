import React from 'react';
import Cookies from 'js-cookie';
import styles from './Cookie.module.css';

const Cookie = () => {
  const [showBanner, setShowBanner] = React.useState(
    !Cookies.get('trafficOrigin'),
  );

  const handleAccept = () => {
    Cookies.set('trafficOrigin', 'accepted', { expires: 365 }); // Expira após 1 ano
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('trafficOrigin', 'declined', { expires: 365 }); // Expira após 1 ano
    setShowBanner(false);
  };
  return (
    showBanner && (
      <div className={styles.cookieBanner}>
        <div className={styles.cookie}>
          <p>
            Este site utiliza cookies para melhorar a sua experiência. Aceita o
            uso de cookies?
          </p>
          <div className={styles.buttonArea}>
            <button onClick={handleAccept}>Aceitar</button>
            <button onClick={handleDecline}>Recusar</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Cookie;
