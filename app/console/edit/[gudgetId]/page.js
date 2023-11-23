"use client";
import ConsoleEditForm from "@/components/ConsoleEditForm/ConsoleEditForm";
import s from "./edit.module.css";

import { useParams } from "next/navigation";

const EditFormPage = () => {
  const { gudgetId } = useParams();

  return (
    <section className={s.section}>
      <h3 className={s.title}>Edit Product</h3>
      <ConsoleEditForm gudgetId={gudgetId} />
    </section>
  );
};

export default EditFormPage;
