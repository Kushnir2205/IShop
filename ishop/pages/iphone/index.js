import Link from "next/link";
import phones from "../../mocks/iphones.json";
import Image from "next/image";

export default function Iphone() {
  return (
    <>
      <ul>
        {phones.iphones.map((iphone) => (
          <li key={iphone.id}>
            <Image
              src={`/assets/img/${iphone.image}.jpg`}
              alt="photo"
              width={100}
              height={100}
            />
            <Link href="/Iphone_14_Pro_Max">{iphone.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
