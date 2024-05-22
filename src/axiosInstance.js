// /src/axiosInstance.js
import axios from 'axios';

// Configuración instancia axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // URL Base a utilizar para la API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Interceptor para añadir tokens de autorización a los headers
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token'); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Interceptor para manejar errores de falta de autorización (401) en las respuestas
axiosInstance.interceptors.response.use(response => response, error => {
  if (error.response && error.response.status === 401) {
    if (window.location.pathname.startsWith('/feed')) {
      window.location.href = '/estudiantes';
    } else if (window.location.pathname.startsWith('/company-profile')) {
      window.location.href = '/empresas';
    }
  }
  return Promise.reject(error);
});

export default axiosInstance;
