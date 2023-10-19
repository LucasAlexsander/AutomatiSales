import React from 'react';
import styles from './Container3.module.css';

import Diag from '../../../public/midia/Icons/Cards/Diagnostico.svg';
import Imple from '../../../public/midia/Icons/Cards/Implementecao.svg';
import USport from '../../../public/midia/Icons/Cards/UsoSuporte.svg';
import Cons from '../../../public/midia/Icons/Cards/Consultoria.svg';
import Integ from '../../../public/midia/Icons/Cards/Integracao.svg';
import Migra from '../../../public/midia/Icons/Cards/Migracao.svg';

const cards = [
  {
    title: 'Diagnóstico Gratuito',
    subtitle:
      'Nós sabemos que cada negócio tem suas próprias necessidades e desafios. Por isso, nós não oferecemos soluções prontas, mas sim soluções sob medida para o seu time de vendas.',
    desc: 'Para começar, basta preencher o formulário em nosso site e agendar uma conversa gratuita com um de nossos consultores. Eles vão analisar o seu cenário, entender as suas dores e apresentar a melhor proposta para você.',
    icon: Diag,
  },
  {
    title: 'Implementação Integração API',
    subtitle: 'Seu gestor de vendas não precisa entender de sistemas de vendas',
    desc: 'Você pode ficar tranquilo, pois nós cuidamos de tudo para você. Nós configuramos, testamos e hospedamos a sua integração, seguindo as suas especificações, pois a nossa equipe técnica é formada por profissionais qualificados e experientes, que vão implantar a sua integração de forma rápida e eficiente, conforme você solicitar. ',
    icon: Imple,
  },
  {
    title: 'Uso e Suporte ',
    subtitle:
      'Você pode usar as suas integrações sem limites, basta observar custos de hospedagens e podem integrar quantos sistemas quiser, com a frequência que precisar.',
    desc: 'Você também pode contar com o nosso atendimento personalizado via WhatsApp sempre que precisar. Nós estamos prontos para tirar as suas dúvidas, resolver os seus problemas e receber as suas sugestões. Você não é apenas um cliente, mas um parceiro do nosso negócio.',
    icon: USport,
  },
  {
    title: 'Migração de dados de CRM',
    subtitle:
      'Experimente Migrações para obter assistência personalizada ou opte por Migrações Personalizadas para atender às suas necessidades complexas. Comece uma jornada fácil de migração de dados de CRM.',
    desc: '',
    icon: Migra,
  },
  {
    title: 'Consultoria CRM',
    subtitle:
      'Eleve o seu negócio com nossa equipe de consultores de CRM, fornecendo orientação de alto nível. Aumente suas vendas por meio de técnicas eficazes de gerenciamento de dados',
    desc: '',
    icon: Cons,
  },
  {
    title: 'Integração e implementação de CRM',
    subtitle:
      'Implementação e integração de CRM Por que é importante e como escolher o caminho certo',
    desc: '',
    icon: Integ,
  },
];

const Container3 = () => {
  return (
    <section className={styles.functions}>
      <div className="sectionTitle">
        <h2>
          Empodere a sua Equipe de vendas sem se preocupar com a parte técnica.
        </h2>
        <p>
          Explorando o máximo das ferramentas que você já possui, irá economizar
          custos
        </p>
      </div>

      <div className={styles.cards}>
        {cards.map((item) => (
          <div key={item.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>{item.title}</h3>
              <img src={item.icon} alt={`Icone do ${item.title}`} />
            </div>

            <div className={styles.subtitle}>
              <p>{item.subtitle}</p>
            </div>

            <div className={styles.desc}>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Container3;
