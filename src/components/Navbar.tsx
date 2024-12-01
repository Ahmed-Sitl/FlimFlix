import { MdKeyboardArrowDown } from "react-icons/md";
import { FaSignInAlt, FaUser } from "react-icons/fa";

import Logo from "@/components/Logo";
import SearchProps from "@/components/SearchPopup";
import DarkMode from "@/components/DarkMode";
import MenuNavbar from "@/components/MenuNavbar";
import DropDonw from "@/components/DropDown";
import movies from "@/data/lists/movies.json";
import tv from "@/data/lists/tv.json";
import people from "@/data/lists/people.json";

const Navbar = async () => {
  return (
    <nav className="bg-primary dark:bg-primary-dark dark:text-white">
      <div className="container mx-auto p-1 flex justify-between items-center">
        <div className="flex gap-14">
          <MenuNavbar />
          <Logo fontSize={60} />
          <div className="hidden md:flex">
            <ul className="flex gap-5 items-center justify-center text-lg font-bold">
              <li className="relative flex justify-center items-center group">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  Movies
                  <MdKeyboardArrowDown
                    className="transition-transform duration-300 group-hover:rotate-180"
                    fontSize={25}
                  />
                </div>
                <span className="absolute top-7 z-20 hidden group-hover:flex flex-col">
                  <DropDonw genres={movies} />
                </span>
              </li>

              <li className="relative flex justify-center items-center group">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  TV Shows
                  <MdKeyboardArrowDown
                    className="transition-transform duration-300 group-hover:rotate-180"
                    fontSize={25}
                  />
                </div>
                <span className="absolute top-7 z-20 hidden group-hover:flex flex-col">
                  <DropDonw genres={tv} />
                </span>
              </li>

              <li className="relative flex justify-center items-center group">
                <div className="flex justify-center items-center gap-2 cursor-pointer">
                  People
                  <MdKeyboardArrowDown
                    className="transition-transform duration-300 group-hover:rotate-180"
                    fontSize={25}
                  />
                </div>
                <span className="absolute top-7 z-20 hidden group-hover:flex flex-col">
                  <DropDonw genres={people} />
                </span>
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
  );
};

export default Navbar;
