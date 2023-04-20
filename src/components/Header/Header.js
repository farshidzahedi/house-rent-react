import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-5 mb-10 border-b  ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex ml-5">
          <div>
            <Link to="/">
              <img src="./image/kilid.svg" className="Logo w-20	" />
            </Link>
          </div>
          <div>
            <ul className="flex gap-10">
              <Link to="/">
                <li>صفحه اصلی</li>
              </Link>
              <Link to="/about">
                <li>درباره ما</li>
              </Link>
              <Link to="/contact">
                <li>تماس با ما</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="border-[1px] text-white font-light px-6 py-3 bg-kilid rounded-md text-xs transition duration-150	delay-100	 hover:bg-transparent hover:text-kilid hover:border-[1px] hover:border-kilid		">
          <Link to="">ورود/ثبت نام</Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
