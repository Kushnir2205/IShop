import axios from "axios";
const instance = axios.create({
  baseURL: "https://ishop-backend-5skc.onrender.com/api",
});

export const fetchAllGudget = async () => {
  const { data } = await instance.get("/store");
  return data;
};

export const fetchDeleteItem = async (items) => {
  const jsonData = JSON.stringify({ gudgetIds: items });

  const { data } = await instance.post("/store/delete", jsonData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};
