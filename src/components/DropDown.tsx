"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  genres: DropDonwProps[];
}

interface DropDonwProps {
  id: number;
  name: string;
  value: string;
  route: string;
}

const DropDown = ({ genres }: Props) => {
  const router = useRouter();

  const handleNavigation = (li: DropDonwProps) => {
    sessionStorage.setItem(
      "genreData",
      JSON.stringify({ id: li.id, name: li.name, route: li.route })
    );

    // Navigate to the movie page
    router.push(li.value);
  };

  return (
    <div className="bg-primary dark:bg-[#3e362e] w-60 text-sm rounded-lg">
      <ul className="grid grid-cols-2 p-3">
        {genres.map((li: DropDonwProps) => (
          <li
            key={li.id}
            className="p-2 hover:text-blue-400 cursor-pointer"
            onClick={() => handleNavigation(li)}
          >
            {li.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDown;
