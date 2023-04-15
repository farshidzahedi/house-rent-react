import React, { useContext } from "react";
//components
import CountryDropdown from "../CountryDropdown";
import PriceRangeDropdown from "../PriceRangeDropdown";
import PropertyDropdown from "../PropertyDropdown";
import {HouseContextData} from '../HouseContext/HouseContext'
import { BiSearch } from "react-icons/bi";

function Search() {

  const {handelClick} = useContext(HouseContextData);
  return (
    <div
      className="z-10	px-[30px] py-6 max-w-[1100px] mx-auto
     flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3	relative lg:-top-3 lg:shadow-md bg-white lg:bg-transparent lg:backdrop-blur rounded-lg items-center" 
    >
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button onClick={()=>handelClick()} className="bg-kilid hover:bg-rose-700 font-bold	 text-white w-full lg:max-w-[160px] h-16 rounded-lg flex justify-center items-center text-2xl">
        <BiSearch />
      </button>
    </div>
  );
}

export default Search;
