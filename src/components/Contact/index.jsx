import styles from "./Contact.module.css";

import location from "../../assets/location.svg";
import msg from "../../assets/msg.svg";
import FadeIn from "../../Hooks/Fade-in";

function Contact() {
  return (
    <section className={styles.section_contact} id="contato">
      <div className={styles.sec_contact}>
        <FadeIn delay={150}>
        <h2 className={styles.title}>Contate-nos</h2>
        </FadeIn>
        <div className={styles.container}>
          <div className={styles.time_box}>
          <FadeIn delay={300}>
            <div className={styles.box_info}>
              <h3>Atendimento</h3>
              <h4>Segunda á Sexta</h4>
              <p className={styles.hora}>8:00AM - 19:00PM</p>
              <div className={styles.line}></div>
              <h4>Sabado</h4>
              <p className={styles.hora}>8:00AM - 21:00PM</p>
              <div className={styles.line}></div>
              <p className={styles.locate}>
                <img src={location} alt="icone de localização" />
                AV Luan Barbosa XXX
              </p>
            </div>
          </FadeIn>
          </div>
          <div className={styles.redes}>
            <FadeIn delay={300}>
              <p>Entre em contato agora mesmo</p>
            </FadeIn>
            <FadeIn delay={450}>
              <button className={styles.contrast}>
                Falar no WhatsApp
                <img src={msg} alt="icone de mensagem" />
              </button>
            </FadeIn>
            <FadeIn delay={600}><button>Instagram</button></FadeIn>
            <FadeIn delay={750}><button>YouTube</button></FadeIn>
            <FadeIn delay={900}><button>E-mail</button></FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
