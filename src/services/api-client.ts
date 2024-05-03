import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "906f36e4c0ff46da8bf7db7640725985",
  },
});
