import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

// export const instance = axios.create({ baseURL: API_URL })
// instance.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8'

// const CancelToken = axios.CancelToken

const axiosInstance = axios.create({
      baseURL: `${API_URL}`,
      timeout: 20000,
      // withCredentials: true,
      headers: {
            "Content-Type": "application/json; charset=utf-8",
      },
      // responseType: "blob",

      // cancelToken: new CancelToken(function executor(c) {
      //     // An executor function receives a cancel function as a parameter
      //     cancel = c
      // })
});

axiosInstance.interceptors.response.use((response) => {
      const { data } = response;
      return data;
});

const setUpToken = (token) => {
      axiosInstance.defaults.headers.common[
            "Authorization"
      ] = `Bearer ${token}`;
};


export { axiosInstance, setUpToken };
