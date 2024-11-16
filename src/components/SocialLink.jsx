import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
const SocialLink = () => {
  return (
    <div>
      <h2 className="font-semibold mb-3">Login With</h2>
      <div className="flex flex-col space-y-2">
        <button className="btn">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn">
          <FaGithub /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLink;
