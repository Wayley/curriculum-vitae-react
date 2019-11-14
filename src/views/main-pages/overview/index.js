import React, { Component } from "react";

// 函数组件
const Overview = props => {
  return (
    <div className="overview">
      <div className="slide">
        <h1>overview1</h1>
      </div>
      <div className="slide active">
        <h1>overview2</h1>
      </div>
      <div className="slide">
        <h1>overview3</h1>
      </div>
      <div className="slide">
        <h1>overview4</h1>
      </div>
    </div>
  );
};
export default Overview;
