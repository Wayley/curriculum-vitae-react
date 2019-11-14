import React, { Component } from "react";
import "./index.css";

// 类组件
export class Footer extends Component {
  render() {
    return <footer className="footer">version: {this.props.version}</footer>;
  }
}
