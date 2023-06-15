import axios from 'axios';

// Crie uma instância do Axios com a URL base da sua API
const api = axios.create({
  baseURL: 'http://localhost:8000/',
});

// Adicione um interceptor de solicitação para adicionar o token de acesso
// ao cabeçalho de autorização de cada solicitação
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => Promise.reject(error)
);

export default api;
