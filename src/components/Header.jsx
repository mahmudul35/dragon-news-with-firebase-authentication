import moment from "moment";
import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-3">
      <div>
        <img src={logo} alt="" className="w-[300px]" />
      </div>
      <h1 className="text-gray-400">Journalism Without Fear or Favour</h1>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
