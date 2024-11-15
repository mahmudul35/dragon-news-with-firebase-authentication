import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-base-300 px-3 py-2">
      <p className="bg-[#D72050] text-white px-3 py-2">Latest</p>
      <Marquee>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          neque.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          neque.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
          neque.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
