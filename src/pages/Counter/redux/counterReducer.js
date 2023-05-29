import {COUNTER_DECREMENT, COUNTER_INCREMENT} from "./actions";

const initialState = 0;


function counterReducer(state = initialState, action){
    switch (action.type){
        case COUNTER_INCREMENT:
            console.log('COUNTER_INCREMENT')
            return state + action.payload;
        case COUNTER_DECREMENT:
            console.log('COUNTER_DECREMENT')
            return state - action.payload;
        default:
            return state
    }
}


export default counterReducer;
