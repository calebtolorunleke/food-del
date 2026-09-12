import React, { useState } from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div
      key={id}
      className="food-item w-full m-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all duration-300 animate-fadeIn overflow-x-hidden"
    >
      <div className="food-item-img-container relative ">
        <img src={image} alt={name} className="food-item-image w-[100%]" />
        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            alt="white"
            className="add w-[35px] absolute bottom-5 right-5 rounded-full cursor-pointer transition-transform duration-200 active:scale-90 hover:scale-105"
            onClick={() => setItemCount((prev) => prev + 1)}
          />
        ) : (
          <div className="food-item-counter absolute bottom-5 right-5 flex items-center gap-2 p-1 rounded-2xl bg-white">
            <img
              src={assets.remove_icon_red}
              alt="red"
              onClick={() => setItemCount((prev) => prev - 1)}
              className="w-[30px]"
            />
            <p>{itemCount}</p>
            <img
              src={assets.add_icon_green}
              alt=""
              className="w-[30px]"
              onClick={() => setItemCount((prev) => prev + 1)}
            />
          </div>
        )}
      </div>
      <div className="food-tem-info p-[20px]">
        <div className="food-item-rating flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc text-[#676767] text-[12px]">
          {description}
        </p>
        <p className="food-item-price text-[#tomato] font-medium my-[10px]">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
