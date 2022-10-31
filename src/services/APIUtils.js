import axios from "axios";

import { API_BASE_URL } from "../constants";

export const getCategories = () => {
  return axios.get(`${API_BASE_URL}/categories`);
};

export const getMenuItems = () => {
  return axios.get(`${API_BASE_URL}/menuItems`);
};

export const getItemsBasedOnTitle = async (title) => {
  return axios.get(`${API_BASE_URL}/categories/${title}`);
};
