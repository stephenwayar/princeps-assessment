import { API_URL, BEARER_TOKEN } from "./env";
import axios, { AxiosInstance } from "axios";

const http: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

const httpNoAuth: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: false
});

// Add authorization header for client-side requests
http.interceptors.request.use(async config => {
  if (typeof document !== 'undefined') {
    config.headers['Authorization'] = `bearer ${BEARER_TOKEN}`;
  } else {
    // Handle server-side requests where auth is not available
    console.log('Server-side request: Missing auth credentials')
  }

  // Return modified config
  return config
})

export { httpNoAuth, http };