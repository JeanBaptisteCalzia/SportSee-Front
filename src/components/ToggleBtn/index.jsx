import "./toggleBtn.scss";
import { useContext } from "react";
import { ThemeContext } from "../../utils/Context";
import { ApiContext } from "../../utils/Context";
import { Link } from "react-router-dom";

const ToggleBtn = ({ id, label, onClick }) => {
  const { toggleId, swithToggleId } = useContext(ThemeContext);
  const userId = toggleId ? "12" : "18";

  const { datas, updateDatas } = useContext(ApiContext);
  const useApi = datas ? true : false;

  if (id === "id") {
    return (
      <div id="id" className="toggle">
        <span className="toggle__title">{label} :</span>

        {toggleId ? (
          <Link
            to={`/user/18`}
            onClick={onClick}
            className={`toggle__btn ${toggleId ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </Link>
        ) : (
          <Link
            to={`/user/12`}
            onClick={onClick}
            className={`toggle__btn ${toggleId ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </Link>
        )}
      </div>
    );
  } else if (id === "api") {
    return (
      <div id="api" className="toggle">
        <span className="toggle__title">{label} :</span>

        {datas ? (
          <button
            onClick={onClick}
            className={`toggle__btn ${datas ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </button>
        ) : (
          <button
            onClick={onClick}
            className={`toggle__btn ${datas ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </button>
        )}
      </div>
    );
  }
};

export default ToggleBtn;
