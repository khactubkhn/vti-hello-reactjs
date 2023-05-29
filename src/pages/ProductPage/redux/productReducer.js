import {FETCHED_PRODUCTS} from "./actions";

const initialState = []


const productReducer = (state= initialState, action) => {
    switch (action.type){
        case FETCHED_PRODUCTS:
            console.log('payload: ', action.payload)
            return action.payload
        default:
            return state
    }
}


export default productReducer
