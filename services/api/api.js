import axios from "axios";

const instance = axios.create({
  baseURL: "https://ishop-backend-5skc.onrender.com/api",
});

export const fetchAllGudget = async (params) => {
  const { data } = await instance.get("/store", { params });
  return data;
};

export const fetchById = async (gudgetId) => {
  const { data } = await instance.get(`/store/${gudgetId}`);
  return data;
};

export const fetchAddGudget = async (info) => {
  const form = new FormData();

  for (var key in info) {
    if (key === "poster" && Array.isArray(info[key])) {
      info[key].forEach((file, index) => {
        form.append(key, file);
      });
    } else {
      form.append(key, info[key]);
    }
  }

  const { data } = await instance.post("/store", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return data;
};

export const fetchDeleteItem = async (gudgetId) => {
  const { data } = await instance.delete(`/store/${gudgetId}`);
  return data;
};
