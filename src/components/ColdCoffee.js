import React from "react";
import { coldCoffee } from "./utils/coldCoffe";
import { Item } from "./Item";

const ColdCoffee = () => {
  return (
    <div>
      {coldCoffee.map((item) => (
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

export default ColdCoffee;
