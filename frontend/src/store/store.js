import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
// export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import {composeWithDevTools} from "redux-devtools-extension"
import { getAllPizzasReducer } from "./getData/pizzaReducer"

const rootReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer
})

export const store=legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))