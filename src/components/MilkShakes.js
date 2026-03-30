import React from "react";
import { milkShakes } from "./utils/milkShakes";
import { Item } from "./Item";
const MilkShakes = () => {
  return (
    <div>
      {milkShakes.map((item) => (
        <div>
          <Item
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MilkShakes;
