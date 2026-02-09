import logo from './logo.svg';
import './App.css';
import { useReducer, useState ,useEffect } from 'react';
import Product from './Product';
import ShoppingCart from './ShoppingCart';
import {  productsReducer } from './Red.js';
import { productContext, dispatchContext } from './Red.js';

function App() {
  const [data, dispatch] = useReducer(productsReducer, []);
  let [loading, setLoading] = useState(true);

  useEffect(()=>{
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(productsFromAPI =>{
          let productWithCart = productsFromAPI.map(p=>({
            id : p.id,
              image: p.image,
              name: p.title,
              price: p.price,
              inCart: false
          }));
         dispatch({ type: 'set', products: productWithCart }); 
          setLoading(false);
      })
  },[]);
  if(loading){
    return(<p>Loading...</p>);
  }
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
