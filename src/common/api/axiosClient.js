import axios from "axios";

const BASE_URL = "http://contabo.foxcode.site:8991";

const axiosClient = axios.create({
    baseURL: BASE_URL
});

export default axiosClient;