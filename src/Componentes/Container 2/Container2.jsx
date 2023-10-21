import React from 'react';
import styles from './Container2.module.css';
// Imagens
import enriquecimento from '../../../public/midia/Make/enriquecimento-de-dados-01.webp';
import enriquecimento2 from '../../../public/midia/Make/enriquecimento-de-dados-02.webp';

import prospeccao from '../../../public/midia/Make/prospec-automatic-01.webp';
import prospeccao2 from '../../../public/midia/Make/prospec-automatic-02.webp';

import CRM from '../../../public/midia/Make/CRM-01.webp';
import CRM2 from '../../../public/midia/Make/CRM-02.webp';
import CRM3 from '../../../public/midia/Make/CRM-03.webp';

import IA from '../../../public/midia/Make/Inteligência-artificial.webp';

const Container2 = () => {
  const [infos, setInfos] = React.useState([
    {
      title: 'Enriquecimento de dados',
      desc: '“Transforme seus dados em insights valiosos e tome decisões mais informadas com a automação de enriquecimento de dados!”',
      img: [enriquecimento, enriquecimento2],
      active: true,
    },
    {
      title: 'Prospecção Automática ',
      desc: '“Você pode economizar tempo, dinheiro e recursos, focando nos leads mais qualificados e relevantes para o seu produto ou serviço.”',
      img: [prospeccao, prospeccao2],
      active: false,
    },
    {
      title: 'Super poderes ao CRM',
      desc: 'Através da API as funcionalidades podem ser potencializam o seu sistema de gestão de relacionamento com o cliente, tornando-o mais ágil, integrado e produtivo.',
      img: [CRM, CRM2, CRM3],
      active: false,
    },
    {
      title: 'Inteligência Artificial',
      desc: 'tecnologia que simula a capacidade humana de aprender, raciocinar e resolver problemas.',
      img: [IA],
      active: false,
    },
  ]);
  const [images, setImages] = React.useState([]);
  const [maxImages, setmaxImages] = React.useState(0);
  const [count, setCount] = React.useState(0);

  // Salvando as imagens caso o elemento esteja selecionado
  React.useEffect(() => {
    infos.map((item) => {
      if (item.active) {
        setImages(item.img);
        setmaxImages(item.img.length);
      }
    });
  }, [infos]);

  React.useEffect(() => {
    const autoNextImage = () => {
      if (count < maxImages - 1) {
        setCount(count + 1);
      } else {
        setCount(0);
      }
    };

    if (count >= maxImages) {
      setCount(0);
    }

    const interval = setInterval(autoNextImage, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [count, maxImages, infos]);

  const changeOption = (element) => {
    setInfos(
      infos.map((item) => {
        if (item == element) {
          return { ...item, active: true };
        }
        return { ...item, active: false };
      }),
    );
  };

  return (
    <section id="diferencial" className={`${styles.servicos} bgSection`}>
      <div className={styles.area}>
        <div className={styles.options}>
          <ul>
            {infos.map((item) => (
              <li
                key={item.title}
                className={item.active ? styles.active : ''}
                onClick={() => {
                  changeOption(item);
                }}
              >
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.image}>
          <img src={images[count]} alt="Imagem Make" />
        </div>
      </div>
    </section>
  );
};

export default Container2;
