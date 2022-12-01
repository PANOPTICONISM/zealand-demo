import React from 'react';
import { ProductProps } from '../../types/types';
import styles from "./styles.module.css";


export const Filters = ({
    products,
    filterProducts,
    isActive
}: {
    products: ProductProps[] | undefined,
    filterProducts: (category: string) => void,
    isActive: string,
}) => {
    const [categories, setCategories] = React.useState<string[]>([]);

    React.useEffect(() => {
        const cat: Array<string> = [];
        products?.map((product) => cat.push(product.category[0]))
        const removeDuplicates = cat.filter((element, index) => {
            return cat.indexOf(element) !== index;
        });

        setCategories(removeDuplicates);
    }, [products, setCategories])

    return (
        <div className={styles.filters}>
            <button onClick={() => filterProducts('all')} className={isActive === 'all' ? styles.active : ""}>All</button>
            {categories?.map((category, index) =>
                <button onClick={() => filterProducts(category)}
                    key={index}
                    className={isActive === category ? styles.active : ""}
                >{category}</button>)}
        </div>
    )
}
