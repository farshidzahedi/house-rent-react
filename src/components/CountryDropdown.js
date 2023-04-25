import React, { useState, useEffect, useContext } from "react";
import { RiMapPinLine, RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContextData } from "./HouseContext/HouseContext";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContextData);
  const [isopen, setIsopen] = useState(false);
  return (
    <Menu as="div" className="w-full z-50 lg:w-60 relative cursor-pointer">
      <Menu.Button
        className="border w-full flex justify-between items-center p-5"
        onClick={() => setIsopen(!isopen)}
      >
        <RiMapPinLine className="text-kilid" />
        <div>
          <div className="text-sm">{country}</div>
        </div>
        {isopen ? (
          <RiArrowUpLine className="text-kilid" />
        ) : (
          <RiArrowDownLine className="text-kilid" />
        )}
      </Menu.Button>

      <Menu.Items className='absolute list-none bg-white w-full shadow-md'>
        {countries.map((country ,index) => {
          return (
            <Menu.Item className='hover:text-kilid leading-10	pr-7 ' as="li" key={index}
            onClick={() => {
            setCountry(country)
            setIsopen(!isopen)
          }}>
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
