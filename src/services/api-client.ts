import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "06d7e27052234204b867e8dda255f902",
  },
});
