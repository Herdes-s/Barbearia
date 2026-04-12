import styles from "./Services.module.css";

import whatsapp from "../../assets/whatsapp.svg";
import corte from "../../assets/tesoura.png";
import barba from "../../assets/gilete.png";
import combo from "../../assets/star.png";
import sobrancelha from "../../assets/sobrancelha.png";
import FadeIn from "../../Hooks/Fade-in";

function Services() {
  return (
    <section className={styles.sectionSenvices} id="servicos">
      <div className={styles.sec_services}>
        <div className={styles.whatsApp}>
          <a href="">
            <img src={whatsapp} alt="logo do whatsApp" />
          </a>
        </div>
        <FadeIn delay={0}>
          <h2>Nossos Serviços</h2>
        </FadeIn>
        <FadeIn delay={150}>
          <h3 className={styles.subTitle}>
            Qualidade, estilo e precisão em cada detalhe
          </h3>
        </FadeIn>
        <div className={styles.cards}>
          <FadeIn delay={300}>
            <div className={styles.card}>
              <img className={styles.img} src={corte} alt="" />
              <h4 className={styles.title}>Corte</h4>
              <p className={styles.description}>
                Corte masculino moderno ou clássico
              </p>
              <p className={styles.price}>R$ 30,00</p>
            </div>
          </FadeIn>
          <FadeIn delay={450}>
            <div className={styles.card}>
              <img className={styles.img} src={barba} alt="" />
              <h4 className={styles.title}>Barba</h4>
              <p className={styles.description}>
                Acabamento completo com navalha
              </p>
              <p className={styles.price}>R$ 20,00</p>
            </div>
          </FadeIn>
          <FadeIn delay={600}>
            <div className={`${styles.card} ${styles.pre}`}>
              <img className={styles.img} src={combo} alt="" />
              <h4 className={styles.title}>Corte + Barba</h4>
              <p className={styles.description}>Combo completo</p>
              <p className={styles.price}>R$ 45,00</p>
            </div>
          </FadeIn>
          <FadeIn delay={750}>
            <div className={styles.card}>
              <img className={styles.img} src={sobrancelha} alt="" />
              <h4 className={styles.title}>Sobrancelha</h4>
              <p className={styles.description}>Ajuste e definição</p>
              <p className={styles.price}>R$ 10,00</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Services;
