import React from "react";
import logo from "../assets/logo.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";

const NavBar = () => {
  return (
    <div className="flex flex-row py-3 items-center justify-between px-4">
      <div className=" flex flex-row items-center gap-6">
        <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="text-3xl font-mono  text-purple-300">
          <span className="font-bold text-5xl font-mono text-purple-500">
            V
          </span>
          Streamer
        </div>
      </div>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-purple-800 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-96 py-3 pl-12 pr-4 text-purple-700 border border-purple-800 rounded-full outline-none bg-transparent focus:bg-white focus:border-purple-600"
        />
      </div>

      <div className="flex flex-row gap-6">
        <AiOutlineVideoCameraAdd className="text-4xl text-purple-400" />
        <MdOutlineNotificationsActive className="text-4xl text-purple-400" />
        <div className="border border-purple-700  border-2 px-4 py-1 rounded-full flex items-center gap-3 ">
          <CiLogin className="text-4xl text-purple-400" />
          <div className="text-white ">Login</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
