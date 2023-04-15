import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className=" w-full overflow-hidden p-12 main flex flex-col lg:flex-row grid-row-3 gap-9 mt-8 bg-[#454545]">
        <div className="right lg:w-1/3 gap-5 box-border">
          <span className="text-white">درباره کلید</span>
          <div className="my-5">
            <Link to="/">
              <img
                src="./image/kilid.svg"
                className="Logo w-32	 bg-white p-7 rounded-md"
              />
            </Link>
          </div>
          <div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              similique tempora modi omnis. Quaerat, libero? Recusandae, tenetur
              a ad beatae eos optio delectus porro ex labore temporibus expedita
              quasi itaque.
            </p>
          </div>
        </div>
        <div className="center lg:w-1/3">
          <span className="text-white">لینک های مفید</span>

          <ul className="text-gray-100 mt-5">
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره ویلا تهران
            </li>
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره ویلا ساحلی شمال
            </li>
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره سوئیت تهران
            </li>
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره ویلا تهران
            </li>
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره ویلا ساحلی شمال
            </li>
            <li className="text-sm bg-gray-500 mb-3 px-3 py-2 rounded-full hover:text-kilid hover:bg-white transition">
              <Link to="/" />
              اجاره سوئیت تهران
            </li>
          </ul>
        </div>
        <div className="left lg:w-1/3">
          <span className="text-white">مجوز ها</span>
          <div className="flex lg:flex-row mt-5 justify-between">
            <Link to="/">
              <img src="./image/enamad.png" className="w-20 bg-white p-1 rounded-md" />
            </Link>
            <Link to="/">
              <img src="./image/MirasLogo.webp" className="w-20 bg-white p-1 rounded-md" />
            </Link>
            <Link to="/">
              <img src="./image/nezam.webp" className="w-20 bg-white p-1 rounded-md" />
            </Link>
          </div>
        </div>

      </div>
      <div className="bg-kilid text-white mx-auto text-center p-5 ">
        <p>این وب سایت کاملا آزمایشی است و برای آموزش و تمرین طراحی شده و هیچ خدماتی ارائه نمیده</p>
        <p>Farshid zahedi</p>
</div>
    </footer>
  );
}

export default Footer;
