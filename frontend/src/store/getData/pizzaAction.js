import { GET_ALL_PIZZA_LOADING } from "./pizzaTypes";
import { GET_ALL_PIZZA_SUCCESS } from "./pizzaTypes";
import { GET_ALL_PIZZA_ERROR } from "./pizzaTypes";
import axios from "axios"
export const getAllPizzas=()=> async (dispatch)=>{
    dispatch({type:GET_ALL_PIZZA_LOADING})
    try {
        const res=await axios.get("/api/pizzas/getAllPizzas")
        console.log(res.data)
        dispatch({type:GET_ALL_PIZZA_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:GET_ALL_PIZZA_ERROR,payload:error})
    }
}