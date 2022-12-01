import React from 'react';
import logo from './logo.svg';
import './App.css';
import useContentful from './hooks/useContentful';
import { ProductProps } from './types/types';
import { Product } from './components/Product/Product';
import { Filters } from './components/Filters/Filters';

function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = React.useState<ProductProps[] | undefined>(undefined);
  const [filteredProducts, setFilteredProducts] = React.useState<ProductProps[] | undefined>(undefined);

  React.useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
      setFilteredProducts(res);
    })
    console.log('running')
  }, [])

  const filterProducts = (category: string) => {
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
        <Filters products={products} filterProducts={filterProducts} />
        <section>
          {filteredProducts?.map((product) => <Product product={product} key={product.title} />)}
        </section>
      </main>
    </div>
  );
}

export default App;
