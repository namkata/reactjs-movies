import axios from "axios";
import queryString  from "query-string";

import apiConfig from "./apiConfig";
import {config} from "dotenv";

const axiosInstance = axios.create({
    baseURL: apiConfig.baseURL,
    headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
    },
    paramsSerializer: params=> queryString.stringify({... params, api_key: apiConfig.apiKey})
});

axiosInstance.interceptors.request.use(async (config) => config);

axiosInstance.interceptors.response.use((response)=>{
    if(response && response.data){
        return response.data;
    }
    return response;
}, (error)=>{
    throw error;
});

export default axiosInstance;