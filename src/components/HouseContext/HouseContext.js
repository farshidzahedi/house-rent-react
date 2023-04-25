import React, { useState, useEffect, createContext } from "react";
import { Data ,Menu } from "../../data";

export const HouseContextData = createContext();

const HouseContext = ({ children }) => {
  const [houses, setHouses] = useState(Data);
  const [country, setCountry] = useState("همه شهر ها");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("همه ملک ها");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("همه قیمت ها");
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState(Menu);


  // set countries state
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    //remove Duplicates
    const uniqueCountries = ["همه شهرها", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, []);

  // set properties state
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    //remove Duplicates
    const uniqueProperties = ["همه ی املاک", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);

  const handelClick = () => {
    //set loading
    setLoading(true);
    // function that checks if the string includes
    const isDefault = (str) => {
      return str.split(" ").includes("همه");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);
    const newHouses = Data.filter((house) => {
      const housePrice = parseInt(house.price);

      //if all value are selected
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      //if all value default
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      // if country is not defalut
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not defalut
      if (isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.type === property;
      }

      //if price is not default
      if (isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      //if countey & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      //if countey & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      //if price & property is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
        setLoading(false)
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses);
       }, 1000);
  };

  return (
    <HouseContextData.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handelClick,
        loading,
        setLoading,
        menu,
        setMenu

      }}
    >
      <div>{children}</div>
    </HouseContextData.Provider>
  );
};

export default HouseContext;
