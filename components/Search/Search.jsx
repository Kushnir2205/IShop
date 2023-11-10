import React from "react";
import s from "./Search.module.css";
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <form className={s.form}>
      <input className={s.input} type="text" placeholder="Search" />
      <BsSearch className={s.searchIcon} />
    </form>
  );
};

export default Search;
