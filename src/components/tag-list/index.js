import React, { Component } from "react";
import "./index.css";

const TagList = props => {
  return <div className="info-list">{props.children}</div>;
};

export default TagList;
