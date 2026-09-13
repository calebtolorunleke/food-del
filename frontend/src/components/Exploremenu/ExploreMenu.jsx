import React from "react";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      {/* HEADING */}
      <h1 className="text-[#262626] text-[28px] sm:text-[34px] lg:text-[40px]">
        Explore Our Menu
      </h1>

      {/* DESCRIPTION */}
      <p className="exploremenu-text max-w-full sm:max-w-[80%] lg:max-w-[60%] text-[#808080] text-sm sm:text-base leading-6 mt-2">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      {/* MENU LIST */}
      <div
        className="
          exploremenu-list
          flex
          flex-row
          gap-4
          sm:gap-5
          lg:gap-6
          justify-between
          items-center
          text-center
          my-5
          overflow-x-auto
          scrollbar-hide
          pb-2
        "
      >
        {menu_list.map((item, index) => {
          const isActive = category === item.menu_name;

          return (
            <div
              key={index}
              className="exploreMenu-list-item flex-shrink-0"
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
            >
              {/* MENU IMAGE */}
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`
                  ${
                    isActive
                      ? "border-4 border-red-500 p-1"
                      : "border-4 border-transparent"
                  }
                  w-[70px]
                  h-[70px]
                  sm:w-[80px]
                  sm:h-[80px]
                  lg:w-[7.5vw]
                  lg:h-[7.5vw]
                  lg:min-w-[7.5vw]
                  rounded-full
                  object-cover
                  cursor-pointer
                  transition-all
                  duration-200
                  ${isActive ? "scale-105" : "hover:scale-105"}
                `}
              />

              {/* MENU NAME */}
              <p
                className={`
                  mt-2
                  sm:mt-3
                  text-[#747474]
                  text-sm
                  sm:text-base
                  cursor-pointer
                  transition-all
                  duration-200
                  ${isActive ? "font-semibold text-[#262626]" : ""}
                `}
              >
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>

      {/* DIVIDER */}
      <hr className="my-3 h-[2px] border-0 bg-[#e2e2e2]" />
    </div>
  );
};

export default ExploreMenu;
