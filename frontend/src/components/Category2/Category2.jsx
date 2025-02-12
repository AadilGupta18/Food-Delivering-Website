import React from "react";
import "./Category2.css";
import { category_list } from "../../assets/assets";

const ExploreMenu = ({ category2, setCategory2 }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Filter The Menu</h1>
      <p className="explore-menu-text">
        Discover a menu of delights, crafted with care to satisfy cravings and
        elevate every dining experience!
      </p>
      <div className="explore-menu-list">
        {category_list.map((item, idx) => {
          return (
            <div
              onClick={() =>
                setCategory2((pre) =>
                  pre === item.menu_name ? "All" : item.menu_name
                )
              }
              key={idx}
              className="explore-menu-list-item"
            >
              <img
                className={category2 === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
