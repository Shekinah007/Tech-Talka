import React from "react";
import techTalkerIcon from "../assets/icons/Content.png";

const Footer = () => {
  return (
    <div className="footer bg-slate-950 text-white w-screen p-10 px-14 text-sm flex flex-col gap-7">
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 md:gap-4 items-stretch md:items-center ">
        <div className="flex flex-col gap-3 md:gap-1 justify-between">
          <div className="flex gap-1 items-center">
            <img src={techTalkerIcon} className="h-4" />
            <p className="font-montserrat">Tech Talka</p>
          </div>
          <a href="#" className="text-gray-400 font-montserrat">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <hr className="text-gray-400" />
        <p className="text-gray-400 font-wix">
          © 2023 Tech Talka. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
