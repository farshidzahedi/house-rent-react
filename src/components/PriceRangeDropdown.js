import React, { useState, useEffect, useContext } from "react";
import { RiWallet3Line, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContextData } from "./HouseContext/HouseContext";

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContextData);

  const prices = [
    { value: "همه قیمت ها" },
    { value: "1.000.000 - 1.500.000" },
    { value: "1.500.000 - 2.000.000" },
    { value: "2.500.000 - 3.000.000" },
  ];

  const [isopen, setIsopen] = useState(false);
  return (
    <Menu as="div" className="w-full z-30 lg:w-60 relative cursor-pointer">
      <Menu.Button
        className="border w-full flex justify-between items-center p-5"
        onClick={() => setIsopen(!isopen)}
      >
        <RiWallet3Line className="text-kilid" />
        <div>
          <div className="text-sm">{price}</div>
        </div>
        {isopen ? (
          <RiArrowUpLine className="text-kilid" />
        ) : (
          <RiArrowDownLine className="text-kilid" />
        )}
      </Menu.Button>

      <Menu.Items className="absolute list-none bg-white w-full shadow-md">
        {prices.map((price, index) => {
          return (
            <Menu.Item
              className="hover:text-kilid leading-10	pr-7 "
              as="li"
              onClick={() => {
                setPrice(price.value);
                setIsopen(!isopen);
              }}
            >
              {price.value}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
