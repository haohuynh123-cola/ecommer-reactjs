import { axiosInstance } from "../utils/fetcher";

const getAllProduct = (param) => {
  return axiosInstance.get(`/products?limit=${param.limit}`)
}

const getAProduct = (param) => {
  return axiosInstance.get(`/products/${param}`)
}

export { getAllProduct, getAProduct }