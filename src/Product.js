import React from 'react'
import '../src/product.css';


function Product({data,dispatch}) {

return (<div className='productContent'>

<h1>Products</h1>
<hr/>
<div className='products'>
    
{ data.map((product,index)=>{
 return <Product1   index={index} key={index} image={product.image} dispatch={dispatch} name={product.name} price={product.price} />;
    })
    }
</div>
</div>


);
}

function Product1({image,name, price,index,dispatch}){
return (
    <div className='pt'>
     <img src={image}/>
      <h2>{name}</h2>
      <p>{price}$</p>
      <BtnCart index={index} dispatch={dispatch}/>
    </div>
);
}
function BtnCart({index,dispatch}){
    return <button onClick={()=>{dispatch({type:"add",index});}}>Add to Cart</button>
;
}
export default Product
