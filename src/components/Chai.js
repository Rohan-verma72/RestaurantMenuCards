import React from "react";
import { chai } from "./utils/chai";
import { Item } from "./Item";

const Chai = () => {
  return (
    <div>
      {chai.map((item) => (
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
export default Chai;
