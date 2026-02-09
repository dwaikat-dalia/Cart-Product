import React from 'react'
import '../src/product.css';

import { useContext } from 'react';
import { productContext, dispatchContext } from './Red.js';
function Product() {
    let data = useContext(productContext);
    return (<div className='productContent'>

        <h1>Products</h1>
        <hr />
        <div className='products' >

            {data.map((product, index) => {
                return <Product1  key={index} product={product} />;
            })
            }
        </div>
    </div>


    );
}

function Product1({product }) {
    return (
        <div className='pt' style={product.inCart===true ? {backgroundColor:'gray',color:'white'}:{backgroundColor:'white'}}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name.length > 20 ? product.name.slice(0, 20) + '...' : product.name}</h2>
            <p>{product.price}$</p>
            <BtnCart id={product.id} />
        </div>
    );
}
function BtnCart({ id }) {
    let dispatch = useContext(dispatchContext);

    return <button onClick={() => { dispatch({ type: "add", id: id }); }}>Add to Cart</button>
        ;
}
export default Product
