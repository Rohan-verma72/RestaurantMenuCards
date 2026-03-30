import React from "react";
import { pizza } from "./utils/pizza";
import { Item } from "./Item";

const Pizza = () => {
  return (
    <div>
      {pizza.map((item) => (
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
export default Pizza;
