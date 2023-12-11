import { ref } from 'vue';
import axios from "axios";
import { logout } from '@/composition/auth';

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

const post = async (resource, data) => {
  setAuthHeader();
  try {
    const response = await axios.post(`${API_URL}${resource}`, data);
    return response;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const get = async (resource) => {
  setAuthHeader();
  try {
    const response = await axios.get(`${API_URL}${resource}`);
    return response;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const handleApiError = (error) => {
  if (error.response && error.response.status === 401 && error.response.data.message === 'Unauthenticated.') {
    logout(); 
  }
};

export { setToken, removeToken, post, get };