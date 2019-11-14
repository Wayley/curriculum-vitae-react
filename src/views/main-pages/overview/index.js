import React, { Component } from "react";
import "./index.css";

import TagList from "../../../components/tag-list";
import Tag from "../../../components/tag";
// 函数组件
const Overview = props => {
  return (
    <div className="overview">
      <div className="overview-info">
        <div className="avatar"></div>
        <TagList>
          <Tag value="ASDF"></Tag>
        </TagList>
      </div>
      <div className="overview-desc">描述</div>
    </div>
  );
};
export default Overview;
