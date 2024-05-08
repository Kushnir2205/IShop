"use client";
import MacBooks from "@/components/MacBook/MacBooks";
import fetchData from "@/utils/api";
import { useEffect, useState } from "react";

const MacBook = () => {
  const [all, setAll] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData("macbook");
        setAll(data);
      } catch (error) {
        console.error("Error in MacBook component:", error);
      }
    };

    fetchCategoryData();
  }, []);

  console.log(all);
  return <div>{all && <MacBooks data={all} />}</div>;
};
export default MacBook;
