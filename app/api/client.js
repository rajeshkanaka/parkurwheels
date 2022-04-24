import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://localhost:9000/api",
});

export default apiClient;
