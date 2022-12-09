import axios from "axios";

export const axiosCreate = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
});