import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const getAllAdverts = async () => {
  const response = await instance.get('/adverts');
  return response;
};

export const getAdvertById = async (id) => {
  const response = await instance.get(`/adverts/${id}`);
  return response;
};
