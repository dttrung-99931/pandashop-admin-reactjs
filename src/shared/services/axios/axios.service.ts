import axios from "axios";
import { storageService } from "../storage.service";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001",
  validateStatus: (status: number) => {
    return [200, 201, 204, 400, 404, 401, 403, 500].includes(status);
  },
});

axiosInstance.interceptors.request.use((request) => {
  const { token } = storageService.getLogin() ?? {};
  if (token) {
    request.headers.setAuthorization("Bearer " + token);
  }
  return request;
});

export const api = axiosInstance;
