import React from 'react';
import { ProductProps } from '../../types/types';
import styles from "./styles.module.css";


export const Filters = ({ products }: { products: ProductProps[] | undefined }) => {
    const [categories, setCategories] = React.useState<string[]>([]);

    React.useEffect(() => {
        const cat: Array<string> = [];
        products?.map((product) => cat.push(product.category[0]))
        const removeDuplicates = cat.filter((element, index) => {
            return cat.indexOf(element) !== index;
        });

        setCategories(removeDuplicates);
    }, [products, setCategories])

    const filterProducts = (category: string) => {
        console.log(category)
    }

    return (
        <div className={styles.filters}>
            {categories?.map((category, index) =>
                <button onClick={() => filterProducts(category)} key={index}>{category}</button>)}
        </div>
    )
}
