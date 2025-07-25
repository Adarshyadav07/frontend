import { createStore,combineReducers,applyMiddleware } from 'redux';
import { thunk } from "redux-thunk";
import {} from 'redux-devtools-extension';
import { composeWithDevTools} from "redux-devtools-extension";
import { productDetailsReducer, productReducer } from "./reducers/productReducer.js";

const reducer = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer
});

let initialState={};

const middleware = [thunk];
const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;