import React, { useState, useEffect, useContext } from "react";
import { RiHome5Line, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContextData } from "./HouseContext/HouseContext";

const PropertyDropdown = () => {
  const { property,setProperty,properties } = useContext(HouseContextData);

  const [isopen, setIsopen] = useState(false);
  return (
    <Menu as="div" className="w-full z-40 lg:w-60 relative cursor-pointer">
      <Menu.Button
        className="border  w-full flex justify-between items-center p-5"
        onClick={() => setIsopen(!isopen)}
      >
        <RiHome5Line className="text-kilid" />
        <div>
          <div className="text-sm">{property}</div>
        </div>
        {isopen ? (
          <RiArrowUpLine className="text-kilid" />
        ) : (
          <RiArrowDownLine className="text-kilid" />
        )}
      </Menu.Button>

      <Menu.Items className='absolute list-none bg-white w-full shadow-md'>
        {properties.map((Property ,index) => {
          return (
            <Menu.Item className='hover:text-kilid leading-10	pr-7 ' as="li" key={index}
            onClick={() => {
            setProperty(Property)
            setIsopen(!isopen)
          }}>
              {Property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
