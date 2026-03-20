import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>barbearia</h1>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/">Sobre</a>
                <a href="/">Preços</a>
                <a href="/">Contato</a>
            </nav>
        </header>
    )
}

export default Header;