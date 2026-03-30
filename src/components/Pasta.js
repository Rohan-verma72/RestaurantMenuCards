import React from "react";
import { pasta } from "./utils/pasta";
import { Item } from "./Item";

const Pasta = () => {
  return (
    <div>
      {pasta.map((item) => (
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

export default Pasta;
