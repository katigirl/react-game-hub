import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "116c78f069634bb190273e5fd926c6e7" },
});
