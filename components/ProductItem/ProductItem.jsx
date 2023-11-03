import Image from "next/image";
import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";
import s from "./ProductItem.module.css";

const ProductItem = ({ product }) => {
  return (
    <li className={s.productItem}>
      <Link href={`/product/${product.id}`}>
        <div className={s.cardOverlay}>
          <Image
            className={s.phoneImg}
            src={`${product.image}`}
            width={200}
            height={200}
            alt={product.name}
          />
          <div className={s.overlay}>
            <button className={s.buyProduct}>Замовити</button>
          </div>

          <p className={s.productName}>{product.name}</p>
          <p className={s.productColor}>{product.color}</p>
          <div className={s.priceCart}>
            <p className={s.productPrice}>{product.price}</p>
            <HiShoppingCart className={s.iconCart} />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ProductItem;
