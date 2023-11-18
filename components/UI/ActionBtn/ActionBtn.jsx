import s from "./ActionBtn.module.css";

const ActionBtn = ({ name, customClass, func, handleDisabled = false }) => {
  return (
    <button
      className={`${s[customClass]} ${s.consoleBtn}`}
      onClick={func}
      disabled={true}
    >
      {name}
    </button>
  );
};

export default ActionBtn;
