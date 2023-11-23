import { fetchById } from "@/services/api/api";
import ProductFormAction from "../ProductFormAction/ProductFormAction";

const ConsoleGudgetForm = async ({ gudgetId }) => {
  const data = await fetchById(gudgetId);
  return <ProductFormAction btnAction="Edit product" data={data} />;
};

export default ConsoleGudgetForm;
