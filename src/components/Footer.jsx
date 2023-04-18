import React from "react";
import techTalkerIcon from "../assets/icons/Content.png";

const Footer = () => {
  return (
    <div className="footer bg-slate-950 text-white w-screen p-10 px-14 text-sm flex flex-col gap-7">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-4 items-stretch md:items-center ">
        <div className="flex flex-col gap-3 md:gap-1 justify-between">
          <div className="flex gap-1 items-center">
            <img src={techTalkerIcon} className="h-4" />
            <p>Untitled UI</p>
          </div>
          <a href="#" className="text-gray-400">
            Contact Us
          </a>
        </div>
        <div className="flex flex-col gap-4 md:gap-2 justify-between">
          <p>Stay up to date</p>
          <form className="flex flex-col md:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="rounded-md p-1"
            ></input>
            <button className="card hover:text-green-300 bg-fuchsia-700 rounded-md p-1">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <hr className="text-gray-400" />
        <p className="text-gray-400">
          © 2023 Untitled UI. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
