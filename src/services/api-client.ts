import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "af02571c1fc84e2197e4a9977c3c172e" },
});
