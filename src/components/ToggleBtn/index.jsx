import "./toggleBtn.scss";
import { useContext } from "react";
import { ApiContext, UserContext } from "../../utils/Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Render a toggleBtn component
 * @typedef {object} ToggleBtnProps
 * @property {string} id The id Should be "id" (toggle between user) or "api" (toggle between datas from api or mocked)
 * @property {string} [label] Optional title of toggle btn
 * @property {function} onClick The click event handler
 * @return { JSX.Element }
 */

const ToggleBtn = ({ id, label, onClick }) => {
  const { userId } = useContext(UserContext);
  const { data } = useContext(ApiContext);

  if (id === "id") {
    return (
      <div id="id" className="toggle">
        <span className="toggle__title">{label} :</span>

        {userId == 12 ? (
          <Link
            to={`/user/18`}
            onClick={onClick}
            className={`toggle__btn ${userId == 12 ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </Link>
        ) : (
          <Link
            to={`/user/12`}
            onClick={onClick}
            className={`toggle__btn ${userId == 12 ? "on" : "off"}`}
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

        {data ? (
          <button
            onClick={onClick}
            className={`toggle__btn ${data ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </button>
        ) : (
          <button
            onClick={onClick}
            className={`toggle__btn ${data ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </button>
        )}
      </div>
    );
  }
};

ToggleBtn.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ToggleBtn;
