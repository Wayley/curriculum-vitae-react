import React, { Component } from "react";
import "./index.css";

// 类组件
export class Header extends Component {
  render() {
    return <header className="header">Hi, i m {this.props.name}</header>;
  }
}
