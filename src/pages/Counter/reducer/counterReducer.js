import productService from "../../../common/api/productService";

const initialState = 0;

function counterReducer(state = initialState, action) {
  console.log('Receive action ...');
  switch (action.type) {
    case 'counter/increment':
      return state + 1;
    case 'counter/decrement':
      return state - 1;
    default:
      return state;
  }
}

export default counterReducer;
