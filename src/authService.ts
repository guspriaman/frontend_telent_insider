import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "/api"; // Menggunakan proxy dari next.config.js

// Registrasi
export const register = async (userData: {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Login
export const login = async (credentials: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { token } = response.data;

    // Simpan token ke cookie
    Cookies.set("token", token, { expires: 7 });

    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// Logout
export const logout = () => {
  Cookies.remove("token");
};
