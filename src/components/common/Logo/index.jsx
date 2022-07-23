import React from "react";
import "./styles.css";
import logoImg from "./logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <div>
        <img src={logoImg} alt="" />
      </div>
    </div>
  );
};

export default Logo;
