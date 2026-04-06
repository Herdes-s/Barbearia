import styles from "./Contact.module.css";

import location from "../../assets/location.svg";
import msg from "../../assets/msg.svg";

function Contact() {
  return (
    <section className={styles.section_contact} id="contato">
      <div className={styles.sec_contact}>
        <h2 className={styles.title}>Contate-nos</h2>
        <div className={styles.container}>
          <div className={styles.time_box}>
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
          </div>
          <div className={styles.redes}>
            <p>Entre em contato agora mesmo</p>
            <button className={styles.contrast}>
              Falar no WhatsApp
              <img src={msg} alt="icone de mensagem" />
            </button>
            <button>Instagram</button>
            <button>YouTube</button>
            <button>E-mail</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
