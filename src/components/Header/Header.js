import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { HouseContextData } from "./../HouseContext/HouseContext";

function Header() {
  const { menu, setMenu } = useContext(HouseContextData);
  const [open, setOpen] = useState(false);
  const [megamenu, setMegamenu] = useState("");
  const [megamenuitem, setMegamenuitem] = useState("");

  return (
    <div className="bg-white shadow-md mb-5 py-1">
      <div className="flex items-center justify-around">
        <div className="flex flex-row-reverse justify-between z-50 p-5 md:w-auto w-full">
          <img src="./image/logoo.svg" className="cursor-pointer" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <BiX /> : <BiMenuAltRight />}
          </div>
        </div>
        {/* desktop menu */}
        <div className="md:flex hidden gap-8 items-center m-5 ">
          {menu.map((menuItem) => (
            <li className="list-none group">
              <Link className="hover:text-black cursor-pointer" to={menuItem.link}>
                {menuItem.navmenu}
              </Link>
              {menuItem.megamenu && (
                <div className="absolute hidden group-hover:md:flex left-10 top-15 bg-white z-10 w-[80%] rounded-md p-5 shadow-lg flex flex-row gap-x-20">
                  {menuItem.submenu.map((sub) => (
                    <ul className="flex flex-col cursor-pointer font-bold">
                      {sub.subtitleUl}
                      <div className="flex mt-5 font-thin flex-col gap-2 cursor-pointer  ">
                        {sub.subsubtitle.map((li) => (
                          <li className="hover:text-kilid">{li.subtitle}</li>
                        ))}
                      </div>
                    </ul>
                  ))}
                  <div className="mt-5">
                  <img src="./image/vila-megamenu.jpg"/>
                   </div>
                </div>
              )}
            </li>
          ))}
        </div>
        <div>
          <button className="hidden md:flex border-[1px] text-white font-light px-6 py-3 bg-kilid rounded-md text-xs transition duration-150	delay-100	 hover:bg-transparent hover:text-kilid hover:border-[1px] hover:border-kilid">
            ورود/ثبت نام
          </button>
        </div>
        {/* mobile */}
        <div
          className={`md:hidden py-24 bottom-0 bg-white z-20 flex flex-col w-full h-full absolute duration-500  
          ${open ? "left-0" : "left-[-100%]"}`}>
          <div>
            {menu.map((navmenus) => (
              <div>
                <div className="p-5 cursor-pointer" 
                onClick={()=> megamenuitem!== navmenus.link ? setMegamenuitem(navmenus.link) : setMegamenuitem('')}
                >{navmenus.navmenu}</div>
                <div>
                  {navmenus.megamenu && (
                    <div className={`${megamenuitem===navmenus.link ? "flex-col" : 'hidden'}`}>
                      {navmenus.submenu.map((subtitleUl) => (
                        <>
                          <li className="list-none mr-10 p-3 cursor-pointer"
                          onClick={()=> megamenu !==subtitleUl.link ? setMegamenu(subtitleUl.link) : setMegamenu('')}
                          >
                            <Link to={subtitleUl.link}>
                              {subtitleUl.subtitleUl}
                            </Link>
                          </li>
                          <div className={`${megamenu === subtitleUl.link ? 'flex-col' : 'hidden'}`}>
                            {subtitleUl.subsubtitle.map((sub) => (
                              <li className="p-3 mr-20 cursor-pointer list-none">
                                <Link>{sub.subtitle}</Link>
                              </li>
                            ))}
                          </div>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button className="mx-20 md:hidden border-[1px] text-white font-light px-6 py-3 bg-kilid rounded-md text-xs transition duration-150	delay-100	 hover:bg-transparent hover:text-kilid hover:border-[1px] hover:border-kilid">
            ورود/ثبت نام
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
