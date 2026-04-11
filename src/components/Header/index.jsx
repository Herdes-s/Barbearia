import styles from "./Header.module.css";

import menu from "../../assets/menu.svg";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.sec_header}>
        <div className={styles.overlay}></div>
        <h1 className={styles.logo}>O Cavalheiro</h1>
        <nav className={`${styles.nav} ${open ? styles.open : ""}`}>
          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#sobre" onClick={() => setOpen(false)}>
            Sobre
          </a>
          <a href="#servicos" onClick={() => setOpen(false)}>
            Serviços
          </a>
          <a href="#contato" onClick={() => setOpen(false)}>
            Contato
          </a>
        </nav>
        <div className={`${styles.menu}`} onClick={() => setOpen(!open)}>
          <img src={menu} alt="menu" />
        </div>
      </div>
    </header>
  );
}

export default Header;
