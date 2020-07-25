import React from "react";
import Fusee from "../assets/Vector.png";

const Header = () => {
  return (
    <div>
      <div className="header">
        <img src={Fusee} alt="" />
        <h1>Ready To Go</h1>
      </div>
      <div className="line"></div>
    </div>
  );
};
export default Header;
