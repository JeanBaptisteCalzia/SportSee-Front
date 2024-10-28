import "./toggleBtn.scss";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";
import { Link } from "react-router-dom";

const ToggleBtn = ({ label, onClick }) => {
  const { toggleId, swithToggleId } = useContext(ThemeContext);
  const userId = toggleId ? "12" : "18";

  return (
    <div className="toggle-switch">
      <span className="toggle-switch__title">{label} :</span>

      {toggleId ? (
        <Link
          to={`/user/18`}
          onClick={onClick}
          className={`toggle-btn ${toggleId ? "on" : "off"}`}
        >
          <span className="pin"></span>
        </Link>
      ) : (
        <Link
          to={`/user/12`}
          onClick={onClick}
          className={`toggle-btn ${toggleId ? "on" : "off"}`}
        >
          <span className="pin"></span>
        </Link>
      )}
    </div>
  );
};

export default ToggleBtn;
