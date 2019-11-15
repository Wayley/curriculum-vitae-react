import React, { Component } from "react";
import "./index.css";

const CircleOuterItem = props => {
  const { value, delay, bg, type } = props;
  const renderStyle = (delay, bg) => {
    return {
      "animation-delay": delay,
      background: bg
    };
  };
  const className = "circle-item " + type + "-item";
  return (
    <div className={className} style={renderStyle(delay, bg)}>
      {value}
    </div>
  );
};

export default CircleOuterItem;
