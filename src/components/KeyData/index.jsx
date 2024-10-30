import React from "react";
import "./keyData.scss";
import PropTypes from "prop-types";

/**
 * Render a card component with image and text
 * @typedef {object} KeyDataProps
 * @property {Number} keyData The count of keyData as an integer (calorieCount, proteinCount, carbohydrateCount, lipidCount )
 * @property {string} icon
 * @property {string} title
 * @property {string} [style] Optional class name (Icon background color)
 * @property {string} unit
 * @return { JSX.Element }
 */
function KeyData({ keyData, icon, title, style, unit }) {
  const options = { maximumFractionDigits: 2 };

  return (
    <>
      <div
        className="card__img"
        style={{
          backgroundColor: style,
        }}
      >
        <img src={icon} alt={title} />
      </div>
      <div className="card__content">
        <p>
          {Intl.NumberFormat("en-US", options).format(keyData)}
          {unit}
        </p>
        <h3>{title}</h3>
      </div>
    </>
  );
}

KeyData.propTypes = {
  keyData: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.string,
  unit: PropTypes.string.isRequired,
};

export default KeyData;
