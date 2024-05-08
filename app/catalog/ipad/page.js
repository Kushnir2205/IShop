"use client";

import Ipads from "@/components/Ipad/Ipads";
import fetchData from "@/utils/api";
import { useEffect, useState } from "react";

const Ipad = () => {
  const [all, setAll] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData("ipad");
        setAll(data);
      } catch (error) {
        console.error("Error in MacBook component:", error);
      }
    };

    fetchCategoryData();
  }, []);

  console.log(all);
  return <div>{all && <Ipads data={all} />}</div>;
};
export default Ipad;
