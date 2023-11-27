"use client";
import ConsoleEditForm from "@/components/ConsoleEditForm/ConsoleEditForm";
import s from "./edit.module.css";

import { useParams } from "next/navigation";
import Link from "next/link";

const EditFormPage = () => {
  const { gudgetId } = useParams();

  return (
    <section className={s.section}>
      <Link href={"/console"} className={s.backBtn}>
        &lArr; Back
      </Link>
      <h3 className={s.title}>Edit Product</h3>
      <ConsoleEditForm gudgetId={gudgetId} />
    </section>
  );
};

export default EditFormPage;
