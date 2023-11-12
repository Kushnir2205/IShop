import s from "./Bestseller.module.css";
import ProductItem from "../ProductItem/ProductItem";

const Bestseller = () => {
  const products = [
    {
      id: 1,
      name: "Apple iPhone 15 Pro 128GB",
      color: "Midnight",
      image: "/assets/img/slider/1.png",
      price: "$1600",
    },
    {
      id: 2,
      name: "Apple iPhone 15 Pro 128GB",
      color: "Midnight",
      image: "/assets/img/slider/1.png",
      price: "$1600",
    },
    {
      id: 3,
      name: "Apple iPhone 15 Pro 128GB",
      color: "Midnight",
      image: "/assets/img/slider/1.png",
      price: "$1600",
    },
    {
      id: 3,
      name: "Apple iPhone 15 Pro 128GB",
      color: "Midnight",
      image: "/assets/img/slider/1.png",
      price: "$1600",
    },
  ];
  return (
    <>
      {/* <section className={s.container}> */}
      <div className={s.wrapper}>
        <p className={s.bestsellerTitle}>Хіт продажу</p>
        <p className={s.bestsellerTitle}>Новинки</p>
      </div>
      <ul className={s.productList}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
      {/* </section> */}
    </>
  );
};

export default Bestseller;
