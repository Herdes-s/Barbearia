import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.block_footer}>
        <h2>O Cavalheiro</h2>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Contato</a>
        </nav>
        <div className={styles.line}></div>
        <p>© 2026 Todos os direitos reservados Ernand Soares</p>
      </div>
    </footer>
  );
}

export default Footer;
