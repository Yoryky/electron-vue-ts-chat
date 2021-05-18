import http from "axios";
import qs from "qs";

// http 配置
http.defaults.timeout = 10000;
http.defaults.baseURL = "http://rs.qbox.me/";

// http request 拦截器
http.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (err: any) => {
    return Promise.reject(err);
  }
);

// http response 拦截器
http.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default http;
