"use client";
import { useEffect, useState } from "react";
import fetchData from "@/utils/api";
import Airpods from "@/components/Airpods/Airpods";

const Airpod = () => {
  const [all, setAll] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData("airpods");
        setAll(data);
      } catch (error) {
        console.error("Error in MacBook component:", error);
      }
    };

    fetchCategoryData();
  }, []);

  console.log(all);
  return <div>{all && <Airpods data={all} />}</div>;
};
export default Airpod;
