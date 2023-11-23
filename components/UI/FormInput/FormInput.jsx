import s from "./FormInput.module.css";

const FormInput = ({ name, value, func }) => {
  return (
    <div className={s.inputWrap}>
      <label>{name.charAt(0).toUpperCase() + name.slice(1)}:</label>
      <input type="text" name={name} onChange={func} value={value} />
    </div>
  );
};

export default FormInput;
