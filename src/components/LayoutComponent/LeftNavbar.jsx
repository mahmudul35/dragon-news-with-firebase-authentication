import React, { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCatgories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCatgories(data.data.news_category));
  }, []);

  return (
    <div>
      <h1>All Category({categories.length})</h1>
      <div className="flex flex-col gap-2">
        {categories.map((category) => {
          return (
            <button
              key={category.category_id}
              className="btn bg-base-100 border-none"
            >
              {category.category_name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LeftNavbar;
