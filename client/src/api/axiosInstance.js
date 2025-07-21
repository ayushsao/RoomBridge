import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://roombridge-api.vercel.app', 
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
});

export default axiosInstance;