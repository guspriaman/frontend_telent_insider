import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "/api/properties"; // Menggunakan proxy dari next.config.js

// GET: Mendapatkan daftar properti dengan filter
export const getProperties = async (filters?: {
  type?: string;
  status?: "new" | "second";
  price_min?: number;
  price_max?: number;
  per_page?: number;
}) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.get(API_URL, {
      headers: { Authorization: `Bearer ${token}` },
      params: filters,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

// POST: Menambahkan properti baru
export const addProperty = async (propertyData: {
  type: string;
  status: "new" | "second";
  name: string;
  description: string;
  address: string;
  price: number;
  image: string; // Base64 format
  building_area: number;
  land_area: number;
}) => {
  try {
    const token = Cookies.get("token");
    const response = await axios.post(API_URL, propertyData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};
