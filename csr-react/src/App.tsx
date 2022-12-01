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

  React.useEffect(() => {
    getProducts().then((res) => setProducts(res))
  }, [getProducts])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Filters products={products} />
        <section>
          {products?.map((product) => <Product product={product} key={product.title} />)}
        </section>
      </main>
    </div>
  );
}

export default App;
