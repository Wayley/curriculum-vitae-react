import React, { Component } from "react";
import "./index.css";

const InfoItem = props => {
  const { top, left, value } = props;
  const style = {
    top: top ? top + "%" : "",
    left: left ? left + "%" : ""
  };
  return (
    <div className="info-item" style={style}>
      {value}
    </div>
  );
};

export default InfoItem;
