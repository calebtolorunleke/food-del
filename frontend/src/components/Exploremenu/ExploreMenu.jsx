import React from "react";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = () => {
  return (
    <div className="explore-menu " id="explore-menu">
      <h1 className="text-[#262626] text-[40px]">Explore Our Menu</h1>
      <p className="exploremenu-text max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="exploremenu-list flex flex-row gap-[20px] justify-between items-center text-center my-[20px] overflow-x-auto">
        {menu_list.map((item, index) => {
          return (
            <div className="exploremenu-list-item flex-shrink-0" key={index}>
              {" "}
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className="w-[7.5vw] min-w-[7.5vw]"
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
