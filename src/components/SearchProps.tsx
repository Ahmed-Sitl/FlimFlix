"use client";
import { IoMdSearch } from "react-icons/io";

const SearchProps = () => {
  return (
    <div>
      <IoMdSearch fontSize={25} onClick={() => console.log("clicked")} />
    </div>
  );
};

export default SearchProps;
