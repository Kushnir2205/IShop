import { fetchById } from "@/services/api/api";

const ConsoleGudgetForm = async ({ gudgetId }) => {
  const { name } = await fetchById(gudgetId);
  return <div>{name}</div>;
};

export default ConsoleGudgetForm;
