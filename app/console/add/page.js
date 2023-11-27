import ProductFormAction from "@/components/ProductFormAction/ProductFormAction";
import Link from "next/link";
import s from "./add.module.css";

const Add = () => {
  return (
    <section className={s.section}>
      <Link href={"/console"} className={s.backBtn}>
        &lArr; Back
      </Link>
      <h3 className={s.title}>Add product</h3>
      <ProductFormAction btnAction="Add product" />
    </section>
  );
};

export default Add;
