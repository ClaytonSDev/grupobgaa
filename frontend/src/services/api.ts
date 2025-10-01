// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sua-api.com', // substitua pela URL real da API
  timeout: 10000, // tempo limite opcional
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
