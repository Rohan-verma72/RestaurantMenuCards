import React from "react";

export const Item = (props) => {
  const { name, img, price, description } = props;
  //   console.log("Image URL:", img);
  return (
    <div>
      <div className="flex m-5 mb-0 p-1 bg-gray-100 shadow-lg rounded-lg h-46">
        <div className="flex-shrink-0">
          <img
            src={img}
            className="w-40 h-36 rounded-3xl object-cover"
            alt="Regular Tea"
          />
        </div>
        <div className="ml-6">
          <h1 className="text-xl font-bold text-gray-700 mt-2">{name}</h1>
          <p className="mt-2 text-gray-600">{description}</p>
          <div className="mt-2">
            <span className="text-xl font-semibold text-green-500">
              ₹{price}
            </span>
          </div>
        </div>
        <div>
          <img src="veg.png" alt="" className="w-10 bg-slate-400" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};
