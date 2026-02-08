import React from 'react'
import product2 from '../src/images/p (2).jpg';
import product3 from '../src/images/p (3).jpg';
import product4 from '../src/images/p (4).jpg';
import product5 from '../src/images/p (5).jpg';
import product1 from '../src/images/p (1).jpg';

export let total = 0;
 export let products = [
    {image:product1,
        name :"A",
        price :70,
        inCart:false
    },
    {image:product2,
        name :"B",
        price :60,
        inCart:true
    },{image:product3,
        name :"C",
        price :20,inCart:false
    },{image:product4,
        name :"D",
        price :120,inCart:false
    },{image:product5,
        name :"E",
        price :25,inCart:true
    }
        

];
 export  function productsReducer(state,action){
    
switch(action.type){
case "add": 
{
let newState =  state.map((product,index)=>{

    if (action.index === index){

        return  {...product, inCart:true}
    }else{
        return  product;
    }
      });
  
   return newState;

}
case "remove": 
{
let newState =  state.map((product,index)=>{

    if (action.index === index){

        return  {...product, inCart:false}
    }else{
        return  product;
    }
      });
  
   return newState;

}

default : return  state;


}

}
export default function Red() {


}


