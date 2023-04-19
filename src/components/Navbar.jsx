import React from "react";
import techTalkerIcon from "../assets/icons/Content.png";

const Navbar = () => {
  return (
    <div className="navbar bg-fuchsia-200 p-2 rounded-2xl flex items-center justify-between font-semibold text-sm w-11/12 ">
      <img src={techTalkerIcon} className="h-8" />
      <div className="flex gap-3">
        <div className="search flex gap-2 items-center bg-blue-100/0 border-fuchsia-600 border-[1px] rounded-lg p-1 px-2 text-xs w-52 md:w-[350px]">
          <input
            type="text"
            placeholder="Search topic"
            className=" w-full bg-fuchsia-100/0"
          ></input>
          <button className="bx bx-search-alt-2 bx-sm hover:text-[#77009A]"></button>
        </div>
        <a
          href="#"
          className="hidden md:flex place-items-center bg-fuchsia-700 text-white text-sm rounded-md p-1 contact"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
