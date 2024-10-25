import React from "react";
import "./toggleSwitch.scss";

const ToggleSwitch = ({ label }) => {
  return (
    <div className="toggle-switch">
      <span className="toggle-switch__title">{label} :</span>
      <div className="toggle-switch__container">
        <input
          type="checkbox"
          className="toggle-switch__checkbox"
          name={label}
          id={label}
        />
        <label className="toggle-switch__label" htmlFor={label}>
          <span className="toggle-switch__label-inner"></span>
          <span className="toggle-switch__label-switch"></span>
        </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;
