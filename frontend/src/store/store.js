import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
// export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzasReducer } from "./getData/pizzaReducer"
import { addCartReducer } from "./addData/AddCartReducer"

const rootReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer,
    addToCart:addCartReducer
})
const cartItems=JSON.parse(localStorage.getItem("cartData")) || []
const initialState={
addToCart:{
    cartItems:cartItems
}
}
export const store=legacy_createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(thunk)))