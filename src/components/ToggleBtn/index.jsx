import "./toggleBtn.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * Render a toggleBtn component
 * @typedef {Object} ToggleBtnProps
 * @property {String} id The id Should be "id" (toggle between user) or "api" (toggle between datas from api or mocked)
 * @property {String} [label] Optional title of toggle btn
 * @property {Function} onClick The click event handler
 * @property { (Boolean | String) } data Boolean for ToggleBtn with id = API, Number for ToggleBtn with id = id
 * @return { JSX.Element }
 */

const ToggleBtn = ({ id, label, onClick, data }) => {
  if (id === "id") {
    return (
      <div id="id" className="toggle">
        <span className="toggle__title">{label} :</span>

        {data == 12 ? (
          <Link
            to={`/user/18`}
            onClick={onClick}
            className={`toggle__btn ${data == 12 ? "on" : "off"}`}
          >
            <span className="pin"></span>
          </Link>
        ) : (
          <Link
            to={`/user/12`}
            onClick={onClick}
            className={`toggle__btn ${data == 12 ? "on" : "off"}`}
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
  data: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
};

export default ToggleBtn;
