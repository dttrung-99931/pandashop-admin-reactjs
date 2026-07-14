import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001",
  validateStatus: (status: number) => {
    return [200, 201, 204, 400, 404, 401, 403, 500].includes(status);
  },
});

export const api = axiosInstance;
