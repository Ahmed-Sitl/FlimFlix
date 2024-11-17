import React from "react";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-primary-dark dark:text-white py-20">
      <div className="container mx-auto grid gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
        <div className="flex items-center flex-col">
          <Logo fontSize={150} />
        </div>
        <div>
          <p className="text-2xl font-bold mb-1">THE BASICS</p>
          <ul className="flex flex-col gap-2 font-semibold text-gray-400">
            <li>About TMDB</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>API</li>
            <li>System Status</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold mb-1">Get Involved</p>
          <ul className="flex flex-col gap-2 font-semibold text-gray-400">
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold mb-1">Community</p>
          <ul className="flex flex-col gap-2 font-semibold text-gray-400">
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
          </ul>
        </div>
        <div>
          <p className="text-2xl font-bold mb-1">Legal</p>
          <ul className="flex flex-col gap-2 font-semibold text-gray-400">
            <li>API Terms of Use</li>
            <li>Privacy Policy</li>
            <li>DMCA Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
