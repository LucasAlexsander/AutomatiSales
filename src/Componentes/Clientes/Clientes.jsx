import React from 'react';
import styles from './Clientes.module.css';
import Slider from './Slide/Slider';
import { SwiperSlide } from 'swiper/react';

const Clientes = () => {
  const slideSettings = {
    spaceBetween: 50,
    slidesPerView: 3,
    navigation: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      clickable: true,
    },

    breakpoints: {
      320: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
      },
      730: {
        loop: false,
        slidesPerView: 2,
        spaceBetween: 40,
        centeredSlides: false,
      },
      1025: {
        loop: false,
        spaceBetween: 50,
        slidesPerView: 3,
      },
    },
  };

  const clientsInfo = [
    {
      nome: 'Lorena Albuquerque',
      profissao: 'Agência Ynsales ',
      feedback:
        '“A implementação das automações da Automatisales transformou a Agência Ynsales. Antes, tínhamos dificuldades em gerar leads e converter vendas. Agora, nosso time comercial aumentou em mais de 50% o número de ligações e 20% a conversão de vendas. Obrigado, Automatisales!”',
      imgProfile: '../../../public/midia/Clientes/LorenaAlbuquerque.png',
    },
    {
      nome: 'Henrique Diaz',
      profissao: 'Clinicas Henrique Diaz',
      feedback:
        '“Eu estava lutando para acompanhar a concorrência antes de contratar a consultoria comercial de automação. Eles me ajudaram a identificar as áreas em que eu estava ficando para trás e me forneceram soluções práticas para melhorar minha estratégia de vendas. Agora, estou superando meus concorrentes!”',
      imgProfile: '../../../public/midia/Clientes/HenriqueDiaz.png',
    },
    {
      nome: 'Juliana Braz',
      profissao: 'Arte Da Jujuba',
      feedback:
        '“Eu não tinha certeza se a consultoria comercial de automação seria útil para o meu negócio, mas decidi dar uma chance. Fiquei surpreso com o quão útil foi! Eles me ajudaram a automatizar muitos dos processos tediosos que eu costumava fazer manualmente, o que me permitiu economizar tempo e dinheiro.”',
      imgProfile: '../../../public/midia/Clientes/JulianaBraz.png',
    },
  ];

  return (
    <section id="clientes" className={styles.clientes}>
      <div className="sectionTitle">
        <h3>O que acham nossos clientes?</h3>
        <p>Nosso serviço é tão personalizado que as pessoas adoram</p>
      </div>

      <Slider settings={slideSettings}>
        {clientsInfo.map(({ nome, profissao, feedback, imgProfile }, index) => (
          <SwiperSlide key={index}>
            <div className={styles.cardCliente}>
              <div className={styles.feedback}>
                <p>{feedback}</p>
              </div>
              <div className={styles.infoCliente}>
                <div className={styles.nomeEprof}>
                  <p>{nome}</p>
                  <p>{profissao}</p>
                </div>
                <div className={styles.fotoPerfil}>
                  {imgProfile != '' ? (
                    <img src={imgProfile} alt={`Foto do ${nome}`} />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Slider>
    </section>
  );
};

export default Clientes;
