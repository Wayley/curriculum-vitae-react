import React, { Component } from "react";
import "./index.css";

import CircleOuterItem from "../../../components/circle-outer-item";
// 函数组件
const Skill = props => {
  return (
    <div className="skill">
      <div className="skill-circle">
        <div className="circle-container circle-outer">
          <CircleOuterItem
            type="outer"
            value="PHP"
            delay="-4s, 0s"
            bg="#7594B3"
          />
          <CircleOuterItem
            type="outer"
            value="Java"
            delay="-6s, -2s"
            bg="#9393BD"
          />
        </div>
        <div className="circle-container circle-inner">
          <CircleOuterItem
            type="inner"
            value="MySQL"
            delay="-6s, -2s"
            bg="#9393BD"
          />
        </div>
      </div>
    </div>
  );
};
export default Skill;
