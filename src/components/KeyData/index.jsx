import React from "react";
import "./keyData.scss";

function KeyData({ keyData, icon, title, style }) {
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
        <p>{keyData}</p>
        <h3>{title}</h3>
      </div>
    </>
  );
}

export default KeyData;
