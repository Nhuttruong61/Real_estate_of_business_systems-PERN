import axios from "axios";
// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
const instance = axios.create({
    baseURL: "http://localhost:8080/api",

});
// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response.data ? response.data : { statusCode: response.status };
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export default instance;