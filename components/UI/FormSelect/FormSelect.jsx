import s from "./FormSelect.module.css";

const FormSelect = ({ name, options = [], func, value }) => {
  return (
    <div className={s.selectWrap}>
      <label htmlFor={name}>
        {`${name.charAt(0).toUpperCase() + name.slice(1)}:`}
      </label>
      <select name={name} onChange={func} defaultValue={value || options[0]}>
        {options.map((opt) => (
          <option value={opt} key={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;