import { ref } from 'vue';
import { setToken, removeToken, post } from '../services/api';
import { setUserInfo } from '@/store/user';

const checkAuthStatus = () => {
  return localStorage.getItem('token') !== null;
};

export const isAuthenticated = ref(checkAuthStatus());

export const login = async (credentials) => {
  try {
    const response = await post('/login', credentials);
    setToken(response.data.token);
    isAuthenticated.value = true;
    setUserInfo(response.data.email, response.data.name, response.data.stores);
    localStorage.setItem('token', response.data.access_token);
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  removeToken();
  isAuthenticated.value = false;
  localStorage.removeItem('token');
  localStorage.removeItem('userInfo');
};
