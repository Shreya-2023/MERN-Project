import axios from 'axios';
import {getToken } from "./Auth";

const apiBaseUrl = 'http://localhost:5000'; 

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in the request headers
axiosInstance.interceptors.request.use(
 async (config) => {
    const token = await getToken();//localStorage.getItem('token');
    const token_dup = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM0NmMyNTUyYjI1YWUxYmU2MTlmZWEiLCJpYXQiOjE3MDk3OTc1NzAsImV4cCI6MTcwOTg4Mzk3MH0.2tEfbP02bL0-SIShYLvGn_cNcHqqWZEPmc6Q'
    //console.log(token)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
