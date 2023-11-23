import axios from "axios";
const { FETCH_URL } = process.env;

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchAllGudget = async (params) => {
  const { data } = await instance.get("/store", { params });
  return data;
};

export const fetchById = async (gudgetId) => {
  const { data } = await instance.get(`/store/${gudgetId}`);
  return data;
};

export const fetchDeleteItem = async (gudgetId) => {
  const { data } = await instance.delete(`/store/${gudgetId}`);
  return data;
};
