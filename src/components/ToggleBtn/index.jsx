import "./toggleBtn.scss";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";
import { NavLink } from "react-router-dom";

const ToggleBtn = ({ label, onClick }) => {
  const { toggleId, swithToggleId } = useContext(ThemeContext);
  const userId = toggleId ? "12" : "18";

  return (
    <div className="toggle-switch">
      <span className="toggle-switch__title">{label} :</span>

      {toggleId ? (
        <NavLink
          to={`/user/${userId}`}
          onClick={onClick}
          className={`toggle-btn ${toggleId ? "on" : "off"}`}
        >
          <span className="pin"></span>
        </NavLink>
      ) : (
        <NavLink
          to={`/user/${userId}`}
          onClick={onClick}
          className={`toggle-btn ${toggleId ? "on" : "off"}`}
        >
          <span className="pin"></span>
        </NavLink>
      )}
    </div>
  );
};

export default ToggleBtn;
