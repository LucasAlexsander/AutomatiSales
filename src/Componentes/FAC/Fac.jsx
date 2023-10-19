import React from 'react';
import styles from './Fac.module.css';

const Fac = () => {
  const [perguntas, setPerguntas] = React.useState([
    {
      pergunta: 'O que é a empresa Automatisales?',
      resposta:
        'Nós usamos a integração API para conectar os seus sistemas de CRM, e-mail, telefone, redes sociais e outros canais de comunicação com os seus clientes. Assim, você pode automatizar todo o seu processo de vendas, desde a prospecção até o fechamento.',
      activeMobile: false,
    },
    {
      pergunta: 'É possível integrar com quais sistemas?',
      resposta:
        'Nós podemos integrar com praticamente qualquer sistema que tenha API disponível, como Salesforce, HubSpot, Pipedrive, Gmail, Outlook, WhatsApp, Facebook, Instagram e muitos outros. Nós fazemos uma análise prévia para verificar a viabilidade do seu projeto.',
      activeMobile: false,
    },
    {
      pergunta: 'É possível testar a integração antes de contratar o serviço?',
      resposta:
        'Infelizmente não é possível, pois nós dedicamos um tempo e um esforço consideráveis para configurar e testar a automação de vendas para cada cliente. O que nós oferecemos no momento pré-contratação é uma demonstração gratuita do nosso serviço, onde você pode ver como funciona na prática e tirar todas as suas dúvidas.',
      activeMobile: false,
    },
    {
      pergunta: 'Como funciona o suporte após ter contratado minha integração?',
      resposta:
        'Independente do plano escolhido, você terá acesso ao nosso time de implantação e suporte. Nós iremos iniciar a configuração da sua automação dentro do prazo estabelecido assim que as informações necessárias estiverem disponíveis. Você também poderá contar com o nosso suporte técnico sempre que precisar.',
      activeMobile: false,
    },
    {
      pergunta: 'Existe fidelidade ou multa por cancelamento?',
      resposta:
        'Não, nós não exigimos fidelidade nem cobramos multa por cancelamento. Você pode cancelar o seu serviço a qualquer momento, sem burocracia. Nós queremos que você fique satisfeito com o nosso trabalho e veja os resultados na sua empresa.',
      activeMobile: false,
    },
    {
      pergunta: 'A Automatisales assina um contrato de prestação de serviços?',
      resposta:
        'Sim, no momento da contratação nós enviaremos um contrato de prestação de serviços para a sua assinatura. Nele estarão descritos os termos e as condições do nosso serviço, bem como os seus direitos e deveres como cliente.',
      activeMobile: false,
    },
    {
      pergunta: 'Quais são os prazos para construir uma integração?',
      resposta:
        'O prazo varia de acordo com a complexidade da automação e dos sistemas envolvidos. Em geral, nós conseguimos entregar uma automação em até 10 dias úteis. Em alguns casos, pode ser mais rápido ou mais demorado.',
      activeMobile: false,
    },
    {
      pergunta: 'Quais são as formas de pagamento disponíveis?',
      resposta:
        'Nós aceitamos PIX, boleto bancário e cartão de crédito com parcelamento em até 2 vezes sem juros.',
      activeMobile: false,
    },
    {
      pergunta: 'Como a Automatisales cuida dos nossos dados?',
      resposta:
        'Nós levamos a segurança dos seus dados muito a sério. Todos os nossos servidores são privados e as informações são criptografadas. Nós seguimos as normas da lei LGPD e respeitamos a sua privacidade.',
      activeMobile: false,
    },
  ]);

  const toogleFac = (element) => {
    setPerguntas(
      perguntas.map((perg) => {
        if (perg == element) {
          return element.activeMobile
            ? { ...perg, activeMobile: false }
            : { ...perg, activeMobile: true };
        }
        return { ...perg, activeMobile: false };
      }),
    );
  };

  return (
    <section id="fac" className={styles.fac}>
      <div className={`sectionTitle ${styles.facTitle}`}>
        <h3>Perguntas Frequentes</h3>
        <p>
          Se você não conseguiu tirar suas dúvidas ainda a nosso respeito,
          talvez o nosso FAQ possa te ajudar.
        </p>
      </div>

      <div className={styles.perguntas}>
        {perguntas.map((pergunta, index) => (
          <div
            key={index}
            className={`${styles.box} ${
              pergunta.activeMobile ? styles.active : ''
            }`}
            onClick={() => toogleFac(pergunta)}
          >
            <div className={styles.pergunta}>
              <h5>{pergunta.pergunta}</h5>

              <div className={styles.iconFac}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.resposta}>
              <p>{pergunta.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fac;
