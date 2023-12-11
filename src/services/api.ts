import { ref } from 'vue';
import axios from "axios";
const API_URL = 'http://giakhanh.local/api';

const token = ref(null);

const setAuthHeader = () => {
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // Xóa tiêu đề Authorization nếu không có token
    delete axios.defaults.headers.common['Authorization'];
  }
};

const setToken = (newToken) => {
  token.value = newToken;
  axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
};

const removeToken = () => {
  token.value = null;
  delete axios.defaults.headers.common['Authorization'];
};

const post = (resource, data) => {
  setAuthHeader();
  return axios.post(`${API_URL}${resource}`, data);
};

const get = (resource) => {
  setAuthHeader();
  return axios.get(`${API_URL}${resource}`);
};

export { setToken, removeToken, post, get };