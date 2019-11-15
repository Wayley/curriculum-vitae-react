import React, { Component } from "react";
import "./index.css";

import InfoItem from "../../../components/info-item";
// 函数组件
const Overview = props => {
  return (
    <div className="overview">
      <div className="overview-info">
        <div className="avatar"></div>
        <div className="info-list">
          <InfoItem value="23" top="-190" left="-210"></InfoItem>
          <InfoItem value="深圳" top="125" left="-310"></InfoItem>
          <InfoItem value="男" top="-215" left="210"></InfoItem>
          <InfoItem value="本科" top="205" left="20"></InfoItem>
          <InfoItem value="信管" top="30" left="310"></InfoItem>
        </div>
      </div>
      <div className="overview-desc">一个热爱生活、热爱工作的小胖纸</div>
    </div>
  );
};
export default Overview;
