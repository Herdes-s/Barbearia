import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.sec_header}>
                <h1 className={styles.logo}>O Cavalheiro</h1>
                <nav className={styles.nav}>
                    <a href="/">Home</a>
                    <a href="/">Sobre</a>
                    <a href="/">Preços</a>
                    <a href="/">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;