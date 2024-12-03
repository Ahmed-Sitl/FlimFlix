"use client";
import React from "react";
import Link from "next/link";

interface Props {
  genres: DropDonwProps[];
}

interface DropDonwProps {
  id: number;
  name: string;
  value: string;
}

const DropDown = ({ genres }: Props) => {
  return (
    <div className="bg-primary dark:bg-[#3e362e] w-60 text-sm rounded-lg">
      <ul className="grid grid-cols-2 p-3">
        {genres.map((li: DropDonwProps) => (
          <Link key={li.id} href={li.value}>
            <li className="p-2 hover:text-blue-400 cursor-pointer">
              {li.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
