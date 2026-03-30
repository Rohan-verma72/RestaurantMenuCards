import React from "react";
import { sandWich } from "./utils/sandWhiches";
import { Item } from "./Item";

const SandWich = () => {
  return (
    <div>
      {sandWich.map((item) => (
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

export default SandWich;
