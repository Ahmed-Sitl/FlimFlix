import React from "react";
import Logo from "./Logo";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSignInAlt, FaUser } from "react-icons/fa";
import SearchProps from "./SearchProps";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <nav className="bg-slate-100 ">
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div className="flex gap-14">
          <Logo />
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
              Actors <MdKeyboardArrowDown fontSize={25} />{" "}
            </li>
          </ul>
        </div>
        <div className="flex gap-5">
          <SearchProps />
          <select
            name=""
            id=""
            className="rounded-lg bg-transparent border-none outline-none"
          >
            <option value="en">EN</option>
            <option value="ar">AE</option>
          </select>
          <DarkMode />
          <FaSignInAlt fontSize={20} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
