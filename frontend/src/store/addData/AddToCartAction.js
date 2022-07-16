import { store } from "../store"
import { ADD_TO_CART_LOADING, ADD_TO_CART_SUCCESS } from "./AddCartType"

export const addPizzasToCart=(pizza,varient,quantity)=> (dispatch)=>{
    var cartItem={
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity
    }
    dispatch({type:ADD_TO_CART_LOADING})
   
    dispatch({type:ADD_TO_CART_SUCCESS,payload:cartItem})
//  console.log(store.getState(),"getState")
    localStorage.setItem("cartData",JSON.stringify(store.getState().addToCart.cartItems))
}