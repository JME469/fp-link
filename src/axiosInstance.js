// src/axiosInstance.js
import axios from 'axios';

// Create an axios instance with default configurations
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for your API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add the authorization token to headers
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor to handle 401 errors
axiosInstance.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) {
    // Handle unauthorized access globally
    if (window.location.pathname.startsWith('/feed')) {
      window.location.href = '/estudiantes';
    } else if (window.location.pathname.startsWith('/company-profile')) {
      window.location.href = '/empresas';
    }
  }
  return Promise.reject(error);
});

export default axiosInstance;
