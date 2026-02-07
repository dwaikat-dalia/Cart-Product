import React from 'react'
import '../src/shoppingcart.css';
import product1 from '../src/images/p (1).jpg';
import product2 from '../src/images/p (2).jpg';
import product3 from '../src/images/p (3).jpg';
import product4 from '../src/images/p (4).jpg';
import product5 from '../src/images/p (5).jpg';

let products = [
    {image:product1,
        name :"A",
        price :"70.00$",
        inCart:false
    },
    {image:product2,
        name :"B",
        price :"60.00$",
        inCart:true
    },{image:product3,
        name :"C",
        price :"20.00$",inCart:false
    },{image:product4,
        name :"D",
        price :"120.00$",inCart:false
    },{image:product5,
        name :"E",
        price :"25.00$",inCart:true
    }
        

];
function ShoppingCart() {
  return (
    <div className='cart'>
        <h1>Shopping Cart</h1>
        <hr/>
{
    products.map((product,index)=>{
      return(  product.inCart && 
  <div key={index} className='product'> 
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <button>Remove</button>
        </div>
    );})
       
   
}

       
        <hr/>
        <p>Total: 70.00$</p>
      </div>
  )
}

export default ShoppingCart
