import React, { Component } from "react";
import "./index.css";

function setExpTouch3D() {
  const expDom = document.getElementsByClassName("slider")[0];
  const contentDom = expDom.parentNode;
  expDom.addEventListener(
    "mousemove",
    throttleGenerator(expMousemoveHandler, 20)
  );
  expDom.addEventListener("mouseout", expMouseoutHandler);

  // 节流函数
  function throttleGenerator(fn, time) {
    let date = new Date();
    return (...args) => {
      const nowDate = new Date();
      if (nowDate - date > time) {
        fn(...args);
        date = nowDate;
      }
    };
  }
  /**
   * expMousemoveHandler
   *
   * @param {*} e
   */
  function expMousemoveHandler(e) {
    const pageX = e.pageX;
    const pageY = e.pageY;
    const bannerWidth = expDom.offsetWidth;
    const bannerHeight = expDom.offsetHeight;
    const offsetLeft = expDom.offsetLeft;
    const offsetTop = contentDom.offsetTop;
    const x = pageX - offsetLeft - bannerWidth / 2;
    const y = -(pageY - offsetTop - bannerHeight / 2);
    expDom.style.transform = `rotateY(${x / 50}deg) rotateX(${y / 25}deg)`;
  }
  /**
   * expMouseoutHandler
   *
   */
  function expMouseoutHandler() {
    expDom.style.transform = "rotateY(0deg) rotateX(0deg)";
  }
}

// 函数组件
const Experience = props => {
  return (
    <div className="experience">
      <div className="experience-list">
        <div className="experience-item"></div>
      </div>
    </div>
  );
};
export default Experience;
