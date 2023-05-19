import axiosClient from "./axiosClient";

const BASE_PATH = '/api/admin/v1/products';

const getHeaderConfigWithToken = () => {
    return {
        headers: {
            token: localStorage.getItem("token")
        }
    }
}


const createProduct = (product) => {
    return axiosClient.post(BASE_PATH, product, getHeaderConfigWithToken())
}

const productAdminService = {
    createProduct
}

export default productAdminService