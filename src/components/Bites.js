import React from "react";
import { bites } from "./utils/bites";
import { Item } from "./Item";

const Bites = () => {
  return (
    <div>
      {bites.map((item) => (
        <div>
          <Item
            name={item.name}
            img={item.img}
            price={item.price}
            description={item.description}
          />
        </div>
      ))}
      <h1 className="text-white">Ram😑</h1>
    </div>
  );
};
export default Bites;
