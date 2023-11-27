import s from "./FormSelect.module.css";

const FormSelect = ({ name, options = [], func, value }) => {
  return (
    <div className={s.selectWrap}>
      <label htmlFor={name} className={s.title}>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}:`}
      </label>
      <select
        name={name}
        id={name}
        onChange={func}
        defaultValue={value || options[0]}
        className={s.select}
      >
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
