import Iphones from "@/components/Iphone/Iphones";
const fetchFilter = async () => {
  const result = await fetch(
    "https://ishop-backend-5skc.onrender.com/api/store/filter?category=iphone"
  );
  const res = await result.json();
  return res;
};
export default async function Iphone() {
  const all = await fetchFilter();
  console.log(all);
  return <Iphones />;
}
