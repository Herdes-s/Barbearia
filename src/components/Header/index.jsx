import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.sec_header}>
                <h1 className={styles.logo}>O Cavalheiro</h1>
                <nav className={styles.nav}>
                    <a href="#home">Home</a>
                    <a href="#sobre">Sobre</a>
                    <a href="#preco">Preços</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    )
}

export default Header;