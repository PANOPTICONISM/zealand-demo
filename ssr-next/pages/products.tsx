import { createClient } from 'contentful';
import React from 'react';
import { Filters } from '../components/Filters/Filters';
import Navigation from '../components/Navigation/Navigation';
import { Product } from '../components/Product/Product';
import styles from '../styles/Products.module.css';
import { EntryProps, ProductProps } from '../types/types';

const Products = ({ products }: { products: ProductProps[] }) => {
    const [filteredProducts, setFilteredProducts] = React.useState<ProductProps[]>(products);
    const [isActive, setIsActive] = React.useState('all');

    const filterProducts = (category: string) => {
        setIsActive(category);
        if (category === 'all') {
            return setFilteredProducts(products);
        }

        const filtering = products?.filter((product) => product.category[0] === category);
        setFilteredProducts(filtering);
    }

    return (
        <div className={styles.container}>
            <Navigation />
            <main className={styles.main}>
                <Filters products={products} filterProducts={filterProducts} isActive={isActive} />
                <section>
                    {filteredProducts?.map((product) => <Product product={product} key={product.title} />)}
                </section>
            </main>
        </div>
    )
}

export default Products;

export const getServerSideProps = async () => {
    const client = createClient({
        space: '3la13s77318z',
        accessToken: 'lxuCv402fN4c_ZQPe12Ec8rhlRdrS-p9-816Nz6dbQY',
        host: 'cdn.contentful.com'
    })

    try {
        const entries: EntryProps = await client.getEntries();
        const fields = entries.items.map((entry) => {
            const image = entry.fields.image.fields.file;

            return { ...entry.fields, image }
        })
        return { props: { products: fields } }
    } catch (err) {
        console.log(err);
    }
}
