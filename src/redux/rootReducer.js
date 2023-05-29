import {combineReducers} from "redux";
import counterReducer from "../pages/Counter/redux/counterReducer";
import productReducer from "../pages/ProductPage/redux/productReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer
});

export default rootReducer
