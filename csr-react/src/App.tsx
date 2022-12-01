import React from 'react';
import logo from './logo.svg';
import './App.css';
import useContentful from './hooks/useContentful';
import { ProductProps } from './types/types';
import { Product } from './components/Product/Product';

function App() {
  const { getProducts } = useContentful();
  const [products, setProducts] = React.useState<ProductProps[] | undefined>(undefined);

  React.useEffect(() => {
    getProducts().then((res) => setProducts(res))
  }, [getProducts])

  console.log(products)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        {products?.map((product) => <Product product={product} />)}
      </main>
    </div>
  );
}

export default App;
