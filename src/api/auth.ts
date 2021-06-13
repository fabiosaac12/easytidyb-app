import axios from 'axios';
import { authBackendUrl } from '../config';

export const auth = axios.create({
  baseURL: authBackendUrl,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

auth.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

auth.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
