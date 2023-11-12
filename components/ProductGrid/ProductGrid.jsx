import React from "react";
import s from "./ProductGrid.module.css";
import ProductGritItem from "./ProductGridItem/ProductGritItem";

const ProductGrid = () => {
  return (
    <>
      <section>
        <div className={s.list}>
          <ProductGritItem />
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
