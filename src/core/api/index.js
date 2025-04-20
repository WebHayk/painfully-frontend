import axios from "axios";
import store from "@/core/store";
import CommonHelpers from "@/core/helpers/common.helpers.js";
import {HTTP_STATUSES} from "@/core/variables/index.js";

const $api = axios.create({
    baseURL: "http://localhost:8088/api/v1"
});

$api.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config;
    },
    error => Promise.reject(error)
);

$api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        let retryCondition = error.response?.status === HTTP_STATUSES.UNAUTHORIZED
            && !originalRequest._retry;

        if (retryCondition) {
            originalRequest._retry = true
            await CommonHelpers.logoutUser();
        }

        return Promise.reject(error)
    }
);

export default $api;
