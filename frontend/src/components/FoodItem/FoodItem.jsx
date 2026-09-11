import React from "react";
import { assets } from "../../assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
  return (
    <div
      key={id}
      className="food-item w-full m-auto rounded-[15px] shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all duration-300 animate-fadeIn overflow-x-hidden"
    >
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image w-[100%]" />
      </div>
      <div className="food-tem-info p-[20px]">
        <div className="food-item-rating flex justify-between items-center mb-[10px]">
          <p className="text-[20px] font-medium">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
