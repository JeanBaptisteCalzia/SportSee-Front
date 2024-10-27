import "./toggleBtn.scss";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";

const ToggleSwitch = ({ label, onClick }) => {
  const { toggleId, swithToggleId } = useContext(ThemeContext);

  return (
    <div className="toggle-switch">
      <span className="toggle-switch__title">{label} :</span>

      <button
        className={`toggle-btn ${toggleId ? "on" : "off"}`}
        onClick={onClick}
      >
        <span className="pin"></span>
      </button>
    </div>
  );
};

export default ToggleSwitch;
