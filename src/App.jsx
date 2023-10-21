import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './Index';
import Header from './Componentes/Header/Header';
import Footer from './Componentes/Footer/Footer';
import Consultor from './Componentes/Consultor/Consultor';

import Cookies from 'js-cookie';
import Cookie from './Componentes/Cookie/Cookie';
import Agradecimento from './Componentes/Agradecimento/Agradecimento';

function App() {
  const [referrer, setReferrer] = useState('');

  useEffect(() => {
    // Verifica se o usuário aceitou os cookies
    const cookieConsent = Cookies.get('trafficOrigin');

    if (cookieConsent === 'accepted') {
      // Incrementa o valor das visitas e atualiza o cookie
      // Obtém a origem do tráfego
      const previousPage = document.referrer;
      setReferrer(previousPage);

      // Salva a origem do tráfego em um cookie chamado 'trafficOrigin'
      Cookies.set('trafficOrigin', previousPage, { expires: 365 }); // Expira após 1 ano
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Cookie />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/consultor" element={<Consultor />} />
          <Route path="/agradecimento" element={<Agradecimento />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
