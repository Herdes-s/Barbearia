import Hero from "../../components/Hero";
import styles from "./Home.module.css"

function Home() {
    return(
        <main className={styles.main}>
            <Hero />
        </main>
    )
}

export default Home;