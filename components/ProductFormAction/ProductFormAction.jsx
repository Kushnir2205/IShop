"use client";
import s from "./ProductFormAction.module.css";
import {
  ADDFORM,
  AVAILABLE_ITEM,
  CATEGORY_ITEM,
  STORAGE_ITEM,
  VERSION_ITEM,
} from "@/constants/addForm";

import { useState, useEffect } from "react";
import FormInput from "../UI/FormInput/FormInput";
import FormSelect from "../UI/FormSelect/FormSelect";
import ConsolePhotoEditor from "../ConsolePhotoEditor/ConsolePhotoEditor";
import ActionBtn from "../UI/ActionBtn/ActionBtn";

const ProductFormAction = ({ btnAction, data = ADDFORM }) => {
  const [formData, setFormData] = useState(data);

  const handleInput = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setFormData((data) => ({ ...data, [inputName]: inputValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form className={s.formWrapper} onSubmit={handleSubmit}>
      <div className={s.leftColumn}>
        <FormInput name="name" value={formData.name} func={handleInput} />
        <FormInput name="color" value={formData.color} func={handleInput} />
        <FormInput name="price" value={formData.price} func={handleInput} />
        <FormInput
          name="condition"
          value={formData.condition}
          func={handleInput}
        />
        <FormSelect
          name="category"
          options={CATEGORY_ITEM}
          func={handleInput}
          value={formData.category}
        />
        <FormSelect
          name="storage"
          options={STORAGE_ITEM}
          func={handleInput}
          value={formData.storage}
        />
        <FormSelect
          name="version"
          options={VERSION_ITEM}
          func={handleInput}
          value={formData.version}
        />
        <FormSelect
          name="available"
          options={AVAILABLE_ITEM}
          func={handleInput}
          value={formData.available}
        />
      </div>
      <div className={s.rightColumn}>
        <ConsolePhotoEditor />
      </div>
      <div className={s.submitBtn}>
        <ActionBtn
          name={btnAction}
          type="submit"
          isActive="true"
          customClass="formSubmit"
        />
      </div>
    </form>
  );
};

export default ProductFormAction;
