import axios, { AxiosRequestConfig } from "axios";

export interface FetchRes<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: process.env.VITE_API_KEY },
});

class APIClinet<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance.get<FetchRes<T>>(this.endpoint, config).then((res) => res.data);
  };
  get = (id: number | string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default APIClinet;
