import React from "react";
import { burger } from "./utils/burger";
import { Item } from "./Item";

const Burger = () => {
  return (
    <div>
      {burger.map((item) => (
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

export default Burger;
