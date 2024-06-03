import axios from 'axios';

const BASE_URL = 'https://6659b114de346625136d8a21.mockapi.io/api';

const LIMIT = 4;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export const getAllAdverts = async (page) => {
  const { data } = await instance.get(`/adverts?page=${page}&limit=${LIMIT}`);
  return data;
};

export const getAdvertById = async (id) => {
  const { data } = await instance.get(`/adverts/${id}`);
  return data;
};
