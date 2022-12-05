import Navigation from '../../components/Navigation/Navigation';
import styles from "./styles.module.css";

const Homepage = () => {
    return (
        <div className={styles.container}>
            <Navigation />
            <main>
                <h1>Homepage</h1>
            </main>
        </div>
    )
}

export default Homepage;