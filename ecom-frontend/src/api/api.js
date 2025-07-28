import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  withCredentials: true // ✅ 可以保留
});

// ✅ 拦截器：每个请求自动加上 token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // 确保你已经登录成功后保存了这个值
    console.log("🚀 attaching token:", token);   // 查看控制台是否输出
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;