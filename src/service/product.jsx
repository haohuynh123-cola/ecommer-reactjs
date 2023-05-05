import { axiosInstance } from "../utils/fetcher";

const getAllProduct = (param) => {
  return axiosInstance.get(`/products?limit=${param.limit}`)
}

export { getAllProduct }