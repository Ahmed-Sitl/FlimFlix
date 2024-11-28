"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const SearchPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="cursor-pointer transition-transform duration-200 hover:scale-110"
        onClick={() => setIsOpen(true)}
      >
        <IoMdSearch fontSize={25} />
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-primary-dark p-6 rounded-lg shadow-xl w-[500px] max-w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition duration-200"
              onClick={closePopup}
            >
              <IoClose fontSize={30} className="cursor-pointer" />
            </button>
            <form>
              <h2 className="text-2xl font-semibold text-white mb-4 text-center">
                Search
              </h2>
              <input
                type="search"
                placeholder="Type to search..."
                className="w-full p-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <button
                onClick={closePopup}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPopup;
