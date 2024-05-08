import Link from "next/link";
import React from "react";
import macks from "../../../mocks/mackBook.json";
import Image from "next/image";

const FilterModelProduct = () => {
  return (
    <div className={s.listProduct}>
      <ul className={s.iphoneList}>
        {macks.macbooks.map((mackbook) => (
          <li key={mackbook.id} className={s.iphoneItem}>
            <Link href={`${mackbook.name}`}>
              <Image
                className={s.images}
                src={`/assets/img/mac/${mackbook.image}.png`}
                alt="photo"
                width={100}
                height={0}
              />
              <p className={s.name}>{mackbook.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterModelProduct;
