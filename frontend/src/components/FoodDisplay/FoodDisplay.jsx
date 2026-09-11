import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, setCategory }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display mt-[30px]">
      <h2 className=" text-3xl">Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-8 my-8">
        {" "}
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
