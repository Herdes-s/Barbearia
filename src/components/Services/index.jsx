import styles from "./Services.module.css"

import whatsapp from "../../assets/whatsapp.svg"
import corte from "../../assets/tesoura.png"
import barba from "../../assets/gilete.png"
import combo from "../../assets/star.png"
import sobrancelha from "../../assets/sobrancelha.png"

function Services() {
    return (
        <section className={styles.sectionSenvices}>
            <div className={styles.sec_services}>
                <div className={styles.cardHero}>
                    <h2>Nossos Serviços</h2>
                    <button className={styles.btn}>WhatsApp <img src={whatsapp} alt="logo_whatsapp" /></button>
                </div>
                <h3 className={styles.subTitle}>Qualidade, estilo e precisão em cada detalhe</h3>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <img className={styles.img} src={corte} alt="" />
                        <h4 className={styles.title}>Corte</h4>
                        <p className={styles.description}>Corte masculino moderno ou clássico</p>
                        <p className={styles.price}>R$ 30,00</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.img} src={barba} alt="" />
                        <h4 className={styles.title}>Barba</h4>
                        <p className={styles.description}>Acabamento completo com navalha</p>
                        <p className={styles.price}>R$ 20,00</p>
                    </div>
                    <div className={`${styles.card} ${styles.pre}`}>
                        <img className={styles.img} src={combo} alt="" />
                        <h4 className={styles.title}>Corte + Barba</h4>
                        <p className={styles.description}>Combo completo</p>
                        <p className={styles.price}>R$ 45,00</p>
                    </div>
                    <div className={styles.card}>
                        <img className={styles.img} src={sobrancelha} alt="" />
                        <h4 className={styles.title}>Sobrancelha</h4>
                        <p className={styles.description}>Ajuste e definição</p>
                        <p className={styles.price}>R$ 10,00</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services