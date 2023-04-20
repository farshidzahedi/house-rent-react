import React, { useState } from "react";
import { Data } from "../data";

import { useParams } from "react-router-dom";

import { BiBed, BiBath, BiArea } from "react-icons/bi";

import { Link } from "react-router-dom";

import { Calendar } from "react-multi-date-picker";

import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "./datePicker.css";

function PropertyDetails() {
  const [values, setValues] = useState([]);

  const {id} = useParams();

  const house = Data.find((house) => {
    return house.id === parseInt(id);
  });

  return (
    <section>
      <div className="container mx-auto p-5 bg-gray-50 mb-5 rounded-lg">
        {/* info House */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl size-bold font-bold	">{house.name}</h2>
            <h3 className="text-sm text-gray-500 my-4 ">{house.address}</h3>
          </div>
          <div className="mb-4 lg:mb-. flex gap-x-2">
            <div className="bg-green-500 text-white px-3 rounded-full">
              {house.type}
            </div>
            <di className="bg-kilid text-white px-3 rounded-full">
              {house.country}
            </di>
          </div>
          <div className="text-3xl text-kilid">{house.price} تومان</div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  gap-5">
        {/* right */}
        <div className="flex-col lg:w-2/3 w-full">
          <div className="  lg:flex-col items-start ">
            {/* image*/}
            <div>
              <img className="w-screen rounded-t-xl" src={house.imageLg} />
            </div>
          </div>
          <h2 className="mt-8 font-bold text-2xl">نظر خود را درباره این ملک بنویسید</h2>
          <div className="border border-gray-300 rounded-lg p-6 my-8">
            {/* Froms */}
            <form className=" flex flex-col gap-4  ">
              <input
                className="border border-gray-300 outline-none rounded w-full p-4 h-15 text-sm   "
                placeholder="نام و نام خانوادگی"
                type="text"
              />
              <input
                className="border border-gray-300 outline-none rounded w-full p-4 h-15 text-sm   "
                placeholder="شماره تماس"
                type="text"
              />
              <textarea
                className="border border-gray-300 outline-none rounded w-full p-4 h-40 text-sm   "
                placeholder="توضیحات"
              ></textarea>
              <button className=" border text-sm border-kilid rounded-md text-kilid p-3 w-full">
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        <div className="lg:w-1/3 mb-8">
          {/* left  agent form*/}
          <div className="sticky top-5">
            <div className="p-7 border rounded-xl">
              <div className="flex items-center gap-x-4 mb-8 ">
                <div className="w-20 h-15 p-1 border border-gray-300 rounded-full">
                  <img src={house.agent.image} />
                </div>
                <div className="font-bold text-lg">{house.agent.name}</div>
                <Link to="" className="text-kilid text-sm">
                  صاحب ملک
                </Link>
              </div>
              <div>
                <div>
                  <div className="flex gap-x-2 justify-evenly text-kilid text-sm my-5">
                    <div className="flex gap-x-2 items-center  ">
                      <BiBed /> اتاق                       <div className="text-xl text-gray-500">
                        {house.bedrooms}
                      </div>
                    </div>

                    <div className="flex gap-x-2 items-center">
                      <BiBath />سرویس 
                      <div className="text-xl text-gray-500">
                        {house.bathrooms}
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <BiArea />متراژ
                      <div className="text-xl text-gray-500">
                        {house.surface}
                      </div>
                    </div>
                  </div>
                </div>
                <div>{house.description}</div>
              </div>
              <div className="text-kilid my-5">کی میخوای سفر کنی؟</div>

              <DatePicker
                placeholder="انتخاب تاریخ سفر"
                value={values}
                onChange={setValues}
                format="MMMM DD YYYY"
                sort
                plugins={[<DatePanel position="left" />]}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
              />
              <button className="bg-kilid text-sm text-white mt-5 w-full p-3 rounded-md">
                رزرو کنید
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PropertyDetails;
