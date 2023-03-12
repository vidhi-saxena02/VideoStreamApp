import React from "react";
import logo from "../assets/logo.png";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
import SearchBar from "./SearchBar";

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
      <SearchBar />
      <div className="flex flex-row gap-6 items-center">
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
