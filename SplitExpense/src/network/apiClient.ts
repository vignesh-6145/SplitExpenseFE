import axios from "axios";

const API_BASE_URL = 'https://localhost:7095/api';

export const axiosClient = axios.create({
    baseURL:API_BASE_URL
});
