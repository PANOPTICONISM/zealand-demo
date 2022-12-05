import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import Homepage from './pages/Homepage/Homepage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
