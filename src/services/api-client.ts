import axios from "axios";

export interface FetchRes<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: process.env.VITE_API_KEY },
});
