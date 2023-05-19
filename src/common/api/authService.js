import axiosClient from "./axiosClient";

const API_PATH = '/api/v1/auth';


const login = (username, password) => {
    return axiosClient.post(API_PATH + '/login', {username, password});
}


const authService = {
    login
}

export default authService
