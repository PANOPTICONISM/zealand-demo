import Navigation from '../../components/Navigation/Navigation';
import styles from "./styles.module.css";

const Homepage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <main>
                <h1>Welcome to the React (CSR) store</h1>
            </main>
        </div>
    )
}

export default Homepage;