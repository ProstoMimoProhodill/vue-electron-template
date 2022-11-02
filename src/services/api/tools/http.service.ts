import axios from 'axios';
export const httpApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
});
