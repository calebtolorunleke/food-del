import React from "react";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1 className="">Explore Our Menu</h1>
      <p className="exploremenu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="exploremenu-list">
        {menu_list.map((item, index) => {
          return (
            <div className="exploremenu-list-item" key={index}>
              <img src={item.menu_image} alt="explore menu" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
