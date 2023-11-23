import s from "./ActionBtn.module.css";

const ActionBtn = ({
  name,
  customClass,
  func,
  isActive = false,
  type = "button",
}) => {
  return (
    <button
      className={`${s[customClass]} ${s.consoleBtn}`}
      onClick={func}
      disabled={!isActive}
      type={type}
    >
      {name}
    </button>
  );
};

export default ActionBtn;
