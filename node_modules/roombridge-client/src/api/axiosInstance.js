import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000', 
    headers: {
        'Content-Type': 'application/json', 
    },
});

// Add request interceptor to include auth token when available
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        // Don't add auth header for registration and login endpoints
        if (token && !config.url.includes('/register') && !config.url.includes('/login')) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;