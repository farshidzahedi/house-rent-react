import React, { useContext } from "react";
import { HouseContextData } from "../HouseContext/HouseContext";
import House from "../House/House";
import { Link } from "react-router-dom";
// import { BarLoader } from "react-spinners";
import {ImSpinner2} from 'react-icons/im'


function HouseList() {
  const { houses, loading } = useContext(HouseContextData);
  //if loading

  if (loading) {
    return <ImSpinner2 className="mx-auto mt-52" color="#B30753" height={4} />;
  }
  if (houses.length < 1) {
    return <div className="text-center text-3xl text-kilid mt-48">این خانه موجود نمی باشد...</div>;
  }

  return (
    <section className="my-20">
      <div className="">
        <div className=" mx-auto">
          <div className="grid md:gride-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8">
            {houses.map((house) => {
              return (
                <Link to={`/Property/${house.id}`} key={house.id}>
                  <House house={house} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HouseList;
