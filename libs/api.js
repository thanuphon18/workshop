import axios from "axios";

const frontendAxiosInstance = axios.create({
  baseURL: `/api`,
  timeout: 1000 * 30,
});

export const api = frontendAxiosInstance;
