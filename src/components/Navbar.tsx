import React from "react";
import Logo from "./Logo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import SearchProps from "./SearchPopup";
import DarkMode from "./DarkMode";
import MenuNavbar from "./MenuNavbar";

const Navbar = () => {
  return (
    <>
      <nav className="bg-primary dark:bg-primary-dark dark:text-white">
        <div className="container mx-auto p-1 flex justify-between items-center">
          <div className="flex gap-14">
            <MenuNavbar />
            <Logo fontSize={60} />
            <div className="hidden md:flex">
              <ul className="flex gap-5 items-center justify-center text-lg font-bold">
                <li className="flex justify-center items-center gap-2">
                  Genres <MdKeyboardArrowDown fontSize={25} />
                </li>
                <li className="flex justify-center items-center gap-2">
                  Movies <MdKeyboardArrowDown fontSize={25} />
                </li>
                <li className="flex justify-center items-center gap-2">
                  TV Shows <MdKeyboardArrowDown fontSize={25} />
                </li>
                <li className="flex justify-center items-center gap-2">
                  Actors
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-5">
            <SearchProps />
            <select
              name=""
              id=""
              className="rounded-lg bg-transparent border-none outline-none"
            >
              <option value="en" className="dark:bg-primary-dark">
                EN
              </option>
              <option value="ar" className="dark:bg-primary-dark">
                AR
              </option>
            </select>
            <DarkMode />
            <FaSignInAlt fontSize={20} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
