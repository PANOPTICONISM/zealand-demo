import { ProductProps } from '../../types/types';
import styles from "./styles.module.css";

export const Product = ({ product }: { product: ProductProps }) => {
    return (
        <article>
            <img src={product.image.url} alt={product.title} className={styles.image} />
            <h2>{product.title}</h2>
            <p className={styles.price}>{product.price} DKK</p>
            <p className={styles.desc}>{product.description}</p>
        </article>
    )
}
