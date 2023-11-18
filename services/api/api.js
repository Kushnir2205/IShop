import axios from "axios";
const instance = axios.create({
  baseURL: "https://ishop-backend-5skc.onrender.com/api",
});

export const fetchAllGudget = async () => {
  const { data } = await instance.get("/store");
  return data;
};

export const fetchDeleteItem = async (items) => {
  const { data } = await instance.delete("/", items);
  return data;
};
