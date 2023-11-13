import React from "react";
import s from "./ProductGrid.module.css";
import ProductGridItem from "./ProductGridItem/ProductGridItem";

const ProductGrid = () => {
  return (
    <>
      <div className={s.list}>
        <ProductGridItem />
      </div>
    </>
  );
};

export default ProductGrid;
