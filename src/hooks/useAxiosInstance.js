import axios from "axios";
import useAuthContext from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/",
});

const useAxiosInstance = () => {
  const { logout } = useAuthContext();
  const navigate = useNavigate();

  axiosInstance.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // console.log("req stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // intercepts 401 and 403 status
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async error => {
      const status = error.response.status;
      // console.log('status error in the interceptor', status);
      // for 401 or 403 logout the user and move the user to the login
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosInstance;
