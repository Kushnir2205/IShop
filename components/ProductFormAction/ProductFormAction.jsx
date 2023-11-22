"use client";
import { ADDFORM } from "@/constants/addForm";

import { useState } from "react";

const ProductFormAction = () => {
  const [formData, setFormData] = useState(ADDFORM);
  // console.log(formData);

  const handleInput = () => {
    //action
  };
  return (
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          // value={formData.name}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={handleInput}
          // value={formData.name}
        />
      </div>
    </form>
  );
};

export default ProductFormAction;
