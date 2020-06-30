import React from "react";
import logo from "@/assets/images/logo.svg";
import { connect } from "react-redux";
import "./index.less";
const Logo = (props) => {
  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      <h1 className="sidebar-title">{props.logoTitle}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ...state.app,
    ...state.settings,
  };
};
export default connect(mapStateToProps)(Logo);
