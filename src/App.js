import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import { products, productsReducer } from './Red.js';
import { productContext, dispatchContext } from './Red.js';

import { useContext } from 'react';
function App() {
  const [data, dispatch] = useReducer(productsReducer, products);


  return (
    <div className="App">
      <productContext.Provider value={data}>
        <dispatchContext.Provider value={dispatch}>
          <Product />
          <ShoppingCart />

        </dispatchContext.Provider >
      </productContext.Provider >
    </div>
  );
}

export default App;
