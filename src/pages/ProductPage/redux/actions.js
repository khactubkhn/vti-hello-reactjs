import productService from "../../../common/api/productService";
export const FETCHED_PRODUCTS = 'products/fetched';


function fetchProducts(page, size){
    return function (dispatch){
        productService.getProducts(page, size)
            .then(response => {
                console.log(response);
                dispatch(productsFetched(response.data.content));
            })
            .catch(error => {
                dispatch(productsFetched([]));
            })
    }
}


const productsFetched = (products) => {
    return {
        type: FETCHED_PRODUCTS,
        payload: products
    }
}


const productActions = {
    fetchProducts,
    productsFetched
}

export default productActions
