import styles from "./About.module.css";

import barber from "../../assets/barber.jpg";
import verificado from "../../assets/verificado.svg";

function About() {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.sec_about}>
        <div className={styles.card}>
          <div className={styles.cardImg}>
            <img src={barber} alt="barbearia" />
          </div>
          <div className={styles.cardInfo}>
            <h2 className={styles.nameSect}>Sobre nois</h2>
            <p className={styles.aboutSect}>
              Há <span>duas décadas</span>, transformamos o ato de barbear em um ritual de respeito e tradição. <span>O Cavalheiro</span> nasceu da paixão pela cutelaria clássica e evoluiu acompanhando as tendências de cada geração, sem nunca perder a essência. São <span>20 anos</span> dedicados a entender que um bom corte é, acima de tudo, o reflexo da personalidade de quem o carrega. Aqui, o tempo passa devagar para que cada detalhe receba a atenção que você merece.
            </p>
          </div>
        </div>
        <div className={styles.cardGrid}>
          <div className={styles.qualities}>
            <h3 className={styles.qualitiesTitle}>
              <img src={verificado} alt="icon_verificado" />
              Tradição Comprovada
            </h3>
            <p>
              Vinte anos de experiência técnica garantindo o acabamento perfeito
              em cada fio.
            </p>
          </div>
          <div className={styles.qualities}>
            <h3 className={styles.qualitiesTitle}>
              <img src={verificado} alt="icon_verificado" />
              Atendimento Premium
            </h3>
            <p>
              Um ambiente projetado para o conforto, onde o café é quente e a
              conversa é franca.
            </p>
          </div>
          <div className={styles.qualities}>
            <h3 className={styles.qualitiesTitle}>
              <img src={verificado} alt="icon_verificado" />
              Produtos de Elite
            </h3>
            <p>
              Utilizamos apenas as melhores linhas profissionais para o cuidado
              com sua barba e pele.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
