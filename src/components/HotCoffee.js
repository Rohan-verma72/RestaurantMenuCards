import React from "react";
import { Item } from "./Item";
import { hotCoffee } from "./utils/hotCoffee";

const HotCoffee = () => {
  return (
    <div>
      {hotCoffee.map((item) => (
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

export default HotCoffee;
