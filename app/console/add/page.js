import ProductFormAction from "@/components/ProductFormAction/ProductFormAction";
import s from "./add.module.css";

const Add = () => {
  return (
    <section className={s.section}>
      <h3 className={s.title}>Add product</h3>
      <ProductFormAction btnAction="Add product" />
    </section>
  );
};

export default Add;
