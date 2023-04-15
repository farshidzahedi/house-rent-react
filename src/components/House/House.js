import React from "react";

import { BiBed, BiBatch, BiArea, BiBath } from "react-icons/bi";
function House({ house }) {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white drop-shadow-md p-5 rounded-lg w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-xl transition rounded-tl-[90px]">
      <img className="mb-8" src={image} />
      <div className="mb-4 flex gap-x-2 text-sm ">
        <div className="bg-green-500 rounded-full text-white px-3">{type}</div>
        <div className="bg-kilid text-white rounded-full px-3">{country}</div>
      </div>
      <div className="text-lg max-w-[260px]">{address}</div>
      <div className="flex gap-x-4">
        <div className="flex items-center text-gray-500 gap-1 my-4">
          <div className="text-lg">
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>

        <div className="flex items-center text-gray-500 gap-1">
          <div className="text-lg">
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className="flex items-center text-gray-500 gap-1">
          <div className="text-lg">
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className="text-kilid text-lg mb-4">{price}</div>
    </div>
  );
}
export default House;
