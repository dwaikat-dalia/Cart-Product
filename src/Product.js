import React from 'react'
import '../src/product.css';

import { useContext } from 'react';
import { productContext, dispatchContext } from './Red.js';
function Product() {
    let data = useContext(productContext);
    return (<div className='productContent'>

        <h1>Products</h1>
        <hr />
        <div className='products'>

            {data.map((product, index) => {
                return <Product1 index={index} key={index} image={product.image} name={product.name} price={product.price} />;
            })
            }
        </div>
    </div>


    );
}

function Product1({ image, name, price, index }) {
    return (
        <div className='pt'>
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{price}$</p>
            <BtnCart index={index} />
        </div>
    );
}
function BtnCart({ index }) {
    let dispatch = useContext(dispatchContext);

    return <button onClick={() => { dispatch({ type: "add", index }); }}>Add to Cart</button>
        ;
}
export default Product
