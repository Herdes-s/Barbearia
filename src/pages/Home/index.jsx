import styles from "./Home.module.css"

import About from "../../components/About";
import Hero from "../../components/Hero";
import Services from "../../components/Services";

function Home() {
    return(
        <main className={styles.main}>
            <Hero />
            <About />
            <Services />
        </main>
    )
}

export default Home;