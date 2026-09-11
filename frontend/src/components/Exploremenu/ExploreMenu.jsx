import React from "react";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu " id="explore-menu">
      <h1 className="text-[#262626] text-[40px]">Explore Our Menu</h1>
      <p className="exploremenu-text max-w-[60%] text-[#808080]">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="exploremenu-list flex flex-row gap-[20px] justify-between items-center text-center my-[20px] overflow-x-auto scrollbar-hide">
        {menu_list.map((item, index) => {
          return (
            <div
              className="exploreMenu-list-item flex-shrink-0"
              key={index}
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
            >
              {" "}
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`${category === item.menu_name ? "border-4 border-red-500 p-1:" : ""} w-[7.5vw] min-w-[7.5vw] rounded-full cursor-pointer transition duration-200`}
              />
              <p className="mt-3 text-[#747474]  cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="my-[10px] h-[2px] text-[#e2e2e2]" />
    </div>
  );
};

export default ExploreMenu;
