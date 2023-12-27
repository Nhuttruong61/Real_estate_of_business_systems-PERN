import axios from "axios";
// import getConfig from "next/config";
// const { publicRuntimeConfig } = getConfig();
const instance = axios.create({
    baseURL: "http://localhost:8080/api",

});
// Add a response interceptor
instance.interceptors.request.use(
    function (config) {
        // Add Authorization header to the request config
        let token: any = localStorage.getItem('persist:pern');
        if (token) token = JSON.parse(token)
        if (token?.user) token = JSON.parse(token.user)
        if (token?.token) {
            config.headers.Authorization = `Bearer ${token.token}`;
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

export default instance;