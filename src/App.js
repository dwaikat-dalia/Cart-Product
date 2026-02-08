import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import {products,productsReducer} from './Red.js';
function App() {
    const [data ,  dispatch] = useReducer(productsReducer , products);

  return (
    <div className="App">

      <Product data={data} dispatch={dispatch}/>
      <ShoppingCart data={data} dispatch={dispatch}/>
    </div>
  );
}

export default App;
