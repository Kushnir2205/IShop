"use client";
import { useEffect, useState } from "react";

export const useLocalStorage = (key, defData) => {
  const [state, setState] = useState(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem(key);
      return localData ? JSON.parse(localData) : defData;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

// "use client";
// import { useEffect, useState } from "react";

// export const useLocalStorage = (key, defData) => {
//   const [state, setState] = useState(() => {
//     const localData = localStorage.getItem(key);
//     return localData ? JSON.parse(localData) : defData;
//   });
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);
//   return [state, setState];
// };
