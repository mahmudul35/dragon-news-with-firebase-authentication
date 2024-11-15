import React from "react";
import { Link } from "react-router-dom";
import userLogo from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <img src={userLogo} alt="" />
        </div>
        <button className="w-[140px] bg-[#403F3F] px-4 py-2 text-white font-semibold rounded-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
