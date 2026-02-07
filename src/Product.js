import React from 'react'
import product1 from '../src/images/p (1).jpg';
import '../src/product.css';
import product2 from '../src/images/p (2).jpg';
import product3 from '../src/images/p (3).jpg';
import product4 from '../src/images/p (4).jpg';
import product5 from '../src/images/p (5).jpg';

let products = [
    {image:product1,
        name :"A",
        price :"70.00$"
    },
    {image:product2,
        name :"B",
        price :"60.00$"
    },{image:product3,
        name :"C",
        price :"20.00$"
    },{image:product4,
        name :"D",
        price :"120.00$"
    },{image:product5,
        name :"E",
        price :"25.00$"
    }
        

];
function Product() {
 
return (<div className='productContent'>

<h1>Products</h1>
<hr/>
<div className='products'>
    
{ products.map((product,index)=>{
 return <Product1  key={index} image={product.image} name={product.name} price={product.price} />;
    })
    }
</div>
</div>


);
   
   

 
  
}
function Product1({image,name, price}){
return (
    <div className='pt'>
     <img src={image}/>
      <h2>{name}</h2>
      <p>{price}</p>
      <BtnCart/>
    </div>
);
}
function BtnCart(){
    return <button>Add to Cart</button>
;
}
export default Product
