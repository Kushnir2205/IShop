import AboutUs from "@/components/AboutUs/AboutUs";
import Bestseller from "@/components/Bestseller/Bestseller";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import TheSwiper from "@/components/TheSwiper/TheSwiper";

export default function Home() {
  return (
    <>
      <TheSwiper />
      <Bestseller />
      <ProductGrid />
      <AboutUs />
    </>
  );
}
