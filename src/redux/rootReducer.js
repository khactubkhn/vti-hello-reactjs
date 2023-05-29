import {combineReducers} from "redux";
import counterReducer from "../pages/Counter/redux/counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
});

export default rootReducer
