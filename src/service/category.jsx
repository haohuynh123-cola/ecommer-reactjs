import { axiosInstance } from "../utils/fetcher";

const getAllCategories = () => {
  return axiosInstance.get(`/products/categories`)
}

export { getAllCategories }