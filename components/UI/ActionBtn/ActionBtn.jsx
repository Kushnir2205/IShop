import s from "./ActionBtn.module.css";

const ActionBtn = ({ name, customClass, func, isActive = false }) => {
  return (
    <button
      className={`${s[customClass]} ${s.consoleBtn}`}
      onClick={func}
      disabled={!isActive}
    >
      {name}
    </button>
  );
};

export default ActionBtn;
