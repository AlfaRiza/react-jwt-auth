import axios from 'axios';    
import { useCookies } from 'react-cookie';

const axiosApiInstance = axios.create();
// Add a request interceptor
// axios.interceptors.request.use(
//   function (config) {
//     const [token, setToken]  = useCookies(['access_token'])
//     // Do something before request is sent
//     config.headers.Authorization = `Bearer ${token.access_token}`;
//     // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
//     config.baseURL = 'http://localhost:8000/';

//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );
axiosApiInstance.interceptors.request.use(
    async config => {
      const value = await redisClient.get(rediskey)
      const keys = JSON.parse(value)
      config.headers = { 
        'Authorization': `Bearer ${keys.access_token}`,
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      return config;
    },
    error => {
      Promise.reject(error)
  });

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();            
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
      return axiosApiInstance(originalRequest);
    }
    return Promise.reject(error);
  });

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch
};