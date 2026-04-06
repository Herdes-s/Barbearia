import styles from "./Home.module.css";

import About from "../../components/About";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";

function Home() {
    return(
        <main className={styles.main}>
            <Hero />
            <About />
            <Services />
            <Contact />
            <Footer />
        </main>
    )
}

export default Home;