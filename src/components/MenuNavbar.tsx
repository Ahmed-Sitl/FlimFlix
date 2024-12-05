"use client";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "@/components/Logo";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

const MenuNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="md:hidden flex justify-center items-center">
        <FiMenu fontSize={40} className="cursor-pointer" onClick={handleMenu} />
      </div>
      {isOpen && (
        <div className="z-10 absolute top-0 left-0 w-full h-screen bg-black/50 dark:text-white">
          <div className="w-80 h-screen bg-primary-dark">
            <div className="flex justify-between items-center p-5">
              <Logo fontSize={80} />
              <IoClose
                color="white"
                fontSize={35}
                onClick={handleMenu}
                className="cursor-pointer"
              />
            </div>

            <div className="flex flex-col gap-7 px-3 items-center text-lg font-bold text-white">
              <Link
                href={"/movie/popular"}
                className="border-2 rounded-2xl w-full text-center p-2 bg-[#3e362e]/50 hover:bg-[#3e362e]/90"
              >
                Movies
              </Link>
              <Link
                href={"/tv/popular"}
                className="border-2 rounded-2xl w-full text-center p-2 bg-[#3e362e]/50 hover:bg-[#3e362e]/90"
              >
                TV Shows
              </Link>
              <Link
                href={"/person"}
                className="border-2 rounded-2xl w-full text-center p-2 bg-[#3e362e]/50 hover:bg-[#3e362e]/90"
              >
                Actors
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuNavbar;
