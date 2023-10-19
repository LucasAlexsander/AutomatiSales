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
      nome: 'Lorem Ipsum',
      profissao: 'Dolor sit',
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae. Ut id iaculis mauris lobortis turpis proin erat et. Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae.',
      imgProfile: '',
    },
    {
      nome: 'Lorem Ipsum',
      profissao: 'Dolor sit',
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae. Ut id iaculis mauris lobortis turpis proin erat et. Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae.',
      imgProfile: '',
    },
    {
      nome: 'Lorem Ipsum',
      profissao: 'Dolor sit',
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae. Ut id iaculis mauris lobortis turpis proin erat et. Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae.',
      imgProfile: '',
    },
    {
      nome: 'Lorem Ipsum',
      profissao: 'Dolor sit',
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae. Ut id iaculis mauris lobortis turpis proin erat et. Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae.',
      imgProfile: '',
    },
    {
      nome: 'Lorem Ipsum',
      profissao: 'Dolor sit',
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae. Ut id iaculis mauris lobortis turpis proin erat et. Lorem ipsum dolor sit amet consectetur. Elementum justo tincidunt lacus id vitae.',
      imgProfile: '',
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
                    <img src={imgProfile} alt="Foto do Cliente" />
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
