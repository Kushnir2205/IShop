// import Iphones from "@/components/Iphone/Iphones";
// const fetchFilter = async () => {
//   const result = await fetch(
//     "https://ishop-backend-5skc.onrender.com/api/store/filter?category=iphone"
//   );
//   const res = await result.json();
//   return res;
// };
// export default async function Iphone() {
//   const all = await fetchFilter();
//   console.log(all);
//   return <Iphones />;
// }
"use client";
import Iphones from "@/components/Iphone/Iphones";
import { useEffect, useState } from "react";
import fetchData from "@/utils/api";

const Iphone = () => {
  const [all, setAll] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData("iphone");
        setAll(data);
      } catch (error) {
        console.error("Error in MacBook component:", error);
      }
    };

    fetchCategoryData();
  }, []);

  console.log(all);
  return <div>{all && <Iphones data={all} />}</div>;
};
export default Iphone;
