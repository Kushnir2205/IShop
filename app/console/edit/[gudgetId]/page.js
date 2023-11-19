"use client";
import ConsoleGudgetForm from "@/components/ConsoleGudgetForm/ConsoleGudgetForm";

import { useParams } from "next/navigation";

const page = () => {
  const { gudgetId } = useParams();

  return <ConsoleGudgetForm gudgetId={gudgetId} />;
};

export default page;
