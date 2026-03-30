import React from "react";
import { Item } from "./Item";
import { maggie } from "./utils/maggie";

const Maggie = () => {
  return (
    <div>
      {maggie.map((item) => (
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

export default Maggie;
