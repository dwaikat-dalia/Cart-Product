
import { createContext } from 'react';
export let productContext = createContext(null)
export let dispatchContext = createContext(null);

export function productsReducer(state, action) {

    switch (action.type) {
        case "add":
            {
                let newState = state.map((product) => {

                    if (action.id === product.id) {
                        return { ...product, inCart: true }
                    } else {
                        return product;
                    }
                });
                return newState;
            }
        case "remove":
            {
                let newState = state.map((product) => {

                    if (action.id === product.id) {

                        return { ...product, inCart: false }
                    } else {
                        return product;
                    }
                });

                return newState;

            }
            case "set":  
          return action.products.map(p => ({ ...p, inCart: false }));

        default: return state;


    }

}