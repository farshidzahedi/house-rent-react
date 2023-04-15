import React from "react";
// //image
import image from "../../assets/img/house-banner.png";

// //component
import Search from "../../components/Search/Search";

function Banner() {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24 ">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-right lg:justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-3xl font-bold lg:text-[48px] leading-[60px] mb-6">
            <span className="text-kilid">انتخاب خانه </span>هوشمندتر از همیشه
          </h1>
          <p className=" mb-8 leading-9">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end ">
          <img src={image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
}

export default Banner;
