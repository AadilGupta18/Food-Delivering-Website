import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category, category2 }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (
            (category === "All" && category2 === "All") ||
            (category === item.category && category2 === item.category2) ||
            (category === item.category && category2 === "All") ||
            (category === "All" && category2 === item.category2)
          ) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
