import { ADD_TO_CART_ERROR, ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS } from "./AddCartType"

const initialState={
  
     loading:false,
     error:false,
    cartItems:[]
   
}

export const addCartReducer=(state=initialState,{type,payload})=>{
    switch(type){

       

        case ADD_TO_CART_SUCCESS:{
            return {
                ...state,
                loading:false,
                  error:false,
                  cartItems:[...state.cartItems,payload]
             
               
            }
           
        }

      
        default: return {...state}
    }
 }