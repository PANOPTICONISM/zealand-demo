import React from 'react';
import logo from './logo.svg';
import './App.css';
import { EntryProps, ProductProps } from './types/types';
import { Product } from './components/Product/Product';
import { Filters } from './components/Filters/Filters';
import { createClient } from 'contentful';

function App() {
  const [products, setProducts] = React.useState<ProductProps[] | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = React.useState<ProductProps[] | undefined>(undefined);
  const [isActive, setIsActive] = React.useState('all');

  React.useEffect(() => {
    const client = createClient({
      space: '3la13s77318z',
      accessToken: 'lxuCv402fN4c_ZQPe12Ec8rhlRdrS-p9-816Nz6dbQY',
      host: 'cdn.contentful.com'
    })
    const getProducts = async () => {
      try {
        const entries: EntryProps = await client.getEntries();
        const fields = entries.items.map((entry) => {
          const image = entry.fields.image.fields.file;

          return { ...entry.fields, image }
        })
        return fields;
      } catch (err) {
        console.log(err);
      }
    }
    getProducts().then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    })
  }, [])

  const filterProducts = (category: string) => {
    setIsActive(category);
    if (category === 'all') {
      return setFilteredProducts(products);
    }

    const filtering = products?.filter((product) => product.category[0] === category);
    setFilteredProducts(filtering);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Filters products={products} filterProducts={filterProducts} isActive={isActive} />
        <section>
          {filteredProducts?.map((product) => <Product product={product} key={product.title} />)}
        </section>
      </main>
    </div>
  );
}

export default App;
