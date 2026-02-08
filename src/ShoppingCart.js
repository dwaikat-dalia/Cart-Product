import React from 'react'
import '../src/shoppingcart.css';
import { useState } from 'react';

function ShoppingCart({data, dispatch}) {
    let total=0;
  return (
    <div className='cart'>
        <h1>Shopping Cart</h1>
        <hr/>
        <div className='groupProducts'>
{
    data.map((product,index)=>{
      return(  product.inCart && 
  <div key={index} className='product'> 
          <h2>{product.name}</h2>
          <p>{product.price}$</p>
          <button onClick={()=>{
            dispatch({type:"remove", index})
          }}>Remove</button>
        </div>
    );})
       
   
}

        </div>


       
        
        <p>Total: {Calc_total(total,data)}$</p>
       <hr/>
        <Checkout dispatch={dispatch}/>
      </div>
  )
}
function Calc_total(total,data){
    data.map(
        (d)=>{
            if(d.inCart){
                total = total + d.price;
            }
        }
    );
    return total;
}
function Checkout({dispatch}){
   
        let [form , setForm] =useState({name:"",email:""})
    return (
            <div>
                <h1>Checkout</h1>
               
                <form className='Form'>
                    <div>
                        <label>Name </label>
                    <input value={form.name} onChange={(e)=>{setForm({...form , name:e.target.value});}}/>
                    </div>
                    <div>
                        <label>Email </label>
                    <input value={form.email} onChange={(e)=>{setForm({...form , email:e.target.value});}}/>
                    </div>
                   
                    <button  onClick={(e)=>handleSubmit(e)}>Place Order</button>

                     
                    </form>              
            </div>


    );
 function handleSubmit(e){
      e.preventDefault(); 
   alert(`Your order has been sent, ${form.name} (${form.email})!`);
}
}

export default ShoppingCart
