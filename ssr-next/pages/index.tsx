import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import { Filters } from '../components/Filters/Filters';
import { Product } from '../components/Product/Product';
import styles from '../styles/Home.module.css';
import { EntryProps, ProductProps } from '../types/types';
import { createClient } from 'contentful';

export default function Home({ products }: { products: ProductProps[] }) {
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
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <Image src="/next.png" alt="Vercel Logo" width={30} height={30} />
      </header>
      <main className={styles.main}>
        <Filters products={products} filterProducts={filterProducts} isActive={isActive} />
        <section>
          {filteredProducts?.map((product) => <Product product={product} key={product.title} />)}
        </section>
      </main>
    </div>
  )
}


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