import Header from "../Header";
import seta from "../../assets/Arrow1.svg";

import FadeIn from "../../Hooks/Fade-in"

import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.sectionHero} id="home">
      <div className={styles.overlay}></div>
      <Header />
      <div className={styles.info}>
        <FadeIn delay={500}>
        <h2 className={styles.tagline}>SEU ESTILO COMEÇA AQUI</h2>
        </FadeIn>
        <FadeIn delay={1000}>
        <button className={styles.btn}>
          <a href="#servicos">Vejá nossos Serviços</a>{" "}
          <img src={seta} alt="seta" />
        </button>
        </FadeIn>
      </div>
    </section>
  );
}

export default Hero;
