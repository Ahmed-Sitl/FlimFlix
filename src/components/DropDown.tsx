import Link from "next/link";
import React from "react";

interface Props {
  genres: DropDonwProps[];
}

interface DropDonwProps {
  id: number;
  name: string;
}

const DropDown = ({ genres }: Props) => {
  return (
    <div className="bg-[#3e362e] w-60 text-sm rounded-lg">
      <ul className="grid grid-cols-2 p-3">
        {genres.map((li: DropDonwProps) => (
          <Link key={li.id} href="/">
            <li className="p-2 hover:text-blue-400">{li.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
