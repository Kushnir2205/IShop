import React from "react";
import s from "./ProductGrid.module.css";
import ProductGritItem from "./ProductGridItem/ProductGritItem";

const ProductGrid = () => {
  return (
    <>
      <div className={s.list}>
        <ProductGritItem />
      </div>
    </>
  );
};

export default ProductGrid;
