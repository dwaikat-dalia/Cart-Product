import React from 'react'
import '../src/shoppingcart.css';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faBagShopping } from '@fortawesome/free-solid-svg-icons'

import { useContext } from 'react';
import { productContext, dispatchContext } from './Red.js';
function ShoppingCart() {
    let data = useContext(productContext);
    let dispatch = useContext(dispatchContext);
    let t = 0;
    let total = Calc_total(t, data);
    return (
        <div className='cart'>
            <h1><FontAwesomeIcon icon={faCartArrowDown} /> Shopping Cart</h1>
            <hr />
            <div className='groupProducts'>
                {
                    data.map((product) => {
                        return (product.inCart &&
                            <div key={product.id} className='product'>
                                <h2>{product.name}</h2>
                                <p>{product.price}$</p>
                                <button onClick={() => {
                                    dispatch({ type: "remove",id: product.id })
                                }}>Remove</button>
                            </div>
                        );
                    })


                }

            </div>



            <p>Total: {total}$</p>
            <hr />
            <Checkout total={total} />
        </div>
    )
}
function Calc_total(total, data) {
    data.map(
        (d) => {
            if (d.inCart) {
                total = total + d.price;
            }
        }
    );
    return total;
}
function Checkout({ total }) {

    let [form, setForm] = useState({ name: "", email: "" })
    return (
        <div>
            <h1><FontAwesomeIcon icon={faBagShopping} /> Checkout</h1>

            <form className='Form'>
                <div>
                    <label>Name </label>
                    <input value={form.name} onChange={(e) => { setForm({ ...form, name: e.target.value }); }} />
                </div>
                <div>
                    <label>Email </label>
                    <input value={form.email} onChange={(e) => { setForm({ ...form, email: e.target.value }); }} />
                </div>

                <button onClick={(e) => handleSubmit(e)}>Place Order</button>


            </form>
        </div>


    );
    function handleSubmit(e) {
        e.preventDefault();

        if (form.name !== "" && form.email !== "" && total !== 0) {
            alert(`Your order has been sent, ${form.name} (${form.email})!`);
        } else if (total === 0) {
            alert(`Please fill your cart !${total}`);
        } else {
            alert(`Please insert name and email !`);
        }

    }
}

export default ShoppingCart
