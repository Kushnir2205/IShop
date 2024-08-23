"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import s from "./DropDownFilter.module.css";

const DropDownFilter = ({ items, label, onFilterChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleDropDownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (filter) => {
    const index = selectedFilters.indexOf(filter);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(index, 1);
      setSelectedFilters(updatedFilters);
    }
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
  };

  return (
    <li className={s.categoriesItem}>
      <div className={s.categoryName} onClick={handleDropDownToggle}>
        <span className={s.label}>{label}</span>
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
                  checked={selectedFilters.includes(item)}
                  onChange={() => handleFilterChange(item)}
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
