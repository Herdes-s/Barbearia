import Header from "../Header";
import seta from "../../assets/Arrow1.svg"

import styles from "./Hero.module.css"

function Hero() {
    return (
        <section className={styles.sectionHero} id="home">
            <div className={styles.overlay}></div>
            <Header />
            <div className={styles.info}>
                <h2 className={styles.tagline}>SEU ESTILO COMEÇA AQUI</h2>
                <button className={styles.btn}>Vejá agenda <img src={seta} alt="seta" /></button>
            </div>
        </section>
    )
}

export default Hero;