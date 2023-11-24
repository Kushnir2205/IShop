import Image from "next/image";
import s from "./ConsolePhotoEditor.module.css";

const ConsolePhotoEditor = ({ name, value = [], func, btnAction }) => {
  return (
    <div>
      <label htmlFor={name}>Choose Photo:</label>
      <input
        type="file"
        name={name}
        onChange={func}
        id={name}
        multiple={true}
        accept="image/webp"
      />
      {value.length > 0 && (
        <ul className={s.photoList}>
          {value.map((photo) => (
            <li key={photo.lastModified} className={s.photoItem}>
              <Image
                alt={"Apple"}
                src={
                  btnAction === "Add product"
                    ? URL.createObjectURL(photo)
                    : photo
                }
                width={300}
                height={300}
                loading="lazy"
                className={s.gudgetPhoto}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConsolePhotoEditor;
