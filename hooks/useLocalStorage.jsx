import { useEffect, useState } from "react";
import storage from "local-storage";

export const useLocalStorage = (key, defData) => {
  const [state, setState] = useState(() => {
    const localData = storage.get(key);
    return localData ? JSON.parse(localData) : defData;
  });

  useEffect(() => {
    storage.set(key, JSON.stringify(state));
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
