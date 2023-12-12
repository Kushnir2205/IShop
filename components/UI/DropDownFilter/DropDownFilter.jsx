"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import s from "./DropDownFilter.module.css";

const DropDownFilter = ({ items, label, onFilterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const handleDropDownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <li className={s.categoriesItem}>
      <div className={s.categoryName} onClick={handleDropDownToggle}>
        <span>{label}</span>
        <IoIosArrowDown
          className={`${s.openList} ${isDropdownOpen && s.open}`}
        />
        {isDropdownOpen && (
          <div
            className={`${s.dropdownContent} ${
              isDropdownOpen && s.dropdownOpen
            }`}
          >
            {items.map((item, index) => (
              <label className={s.label} key={index}>
                <input
                  type="checkbox"
                  className={s.checkBox}
                />
                {item}
              </label>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default DropDownFilter;
