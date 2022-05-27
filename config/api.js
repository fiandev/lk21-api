import axios from "axios";

export const baseURL = "https://149.56.198.206";

const api = axios.create({
  baseURL,
});
const scrap = axios.create({
  
})
export default api;
