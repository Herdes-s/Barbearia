import About from "../../components/About";
import Hero from "../../components/Hero";
import styles from "./Home.module.css"

function Home() {
    return(
        <main className={styles.main}>
            <Hero />
            <About />
        </main>
    )
}

export default Home;