import s from "./FormInput.module.css";

const FormInput = ({ name, value, func }) => {
  return (
    <div className={s.inputWrap}>
      <label htmlFor={name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}:
      </label>
      <input type="text" name={name} onChange={func} value={value} id={name} />
    </div>
  );
};

export default FormInput;
