import React, { Component } from "react";
import "./index.css";

const Tag = props => {
  return <div className="info-item">{props.value}</div>;
};

export default Tag;
