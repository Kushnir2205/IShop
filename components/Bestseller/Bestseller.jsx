import s from "./Bestseller.module.css";
import ProductItem from "../ProductItem/ProductItem";
import BestsellerSwiper from "./BestsellerSwiper/BestsellerSwiper";

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
      id: 4,
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

      <BestsellerSwiper products={products} />
      {/* </section> */}
    </>
  );
};

export default Bestseller;
