import React, { useEffect } from "react";
import vrImg from "../../assets/images/Rectangle 9.png";
import startUpImg from "../../assets/images/Rectangle.png";
import hardWareImg from "../../assets/images/Rectangle 9-1.png";

const HotTopics = () => {
  return (
    <div className="flex flex-col text-white justify-between font-wix w-11/12 gap-6 mt-52 z-10 mb-5">
      <h2 className="text-3xl font-bold font-wix ">Hottest Topics</h2>
      <div className="flex flex-col md:grid md:grid-cols-4 gap-4 animation">
        <div className="card col-span-4 md:col-span-2 bg-fuchsia-950 flex flex-col gap-4 items-start rounded-lg p-5  md:py-16 relative">
          <h3 className="text-2xl font-semibold font-wix z-10">
            Everyday Cool Tech
          </h3>
          <a
            href="#"
            className="border-white font-montserrat border-[1px] rounded-xl px-2 py-[1px] text-sm"
          >
            tech
          </a>
          <p className="z-10 font-montserrat">
            Learn about new technologies shaping the future
          </p>
          <a
            href="#"
            className="rounded-xl font-wix bg-red-300 text-black p-2 z-10"
          >
            Learn More
          </a>
          <img
            src={vrImg}
            className="w-56 absolute bottom-0 right-0 rounded-br-lg"
          ></img>
        </div>

        <div className="card bg-[#006D30]  col-span-2 md:col-span-1 rounded-lg flex flex-col py-10 md:py-16 justify-end items-start gap-2 relative p-5 px-2">
          <img
            src={startUpImg}
            alt=" "
            className="absolute right-0 top-0 w-28 md:w-40 rounded-tr-lg"
          />
          <h2 className="text-2xl font-semibold  font-wix  z-10">Start Ups</h2>
          <a
            href="#"
            className="border-white border-[1px] rounded-xl px-2 py-[1px] text-sm z-10"
          >
            Business
          </a>
          <p className="z-10 font-montserrat">
            Discover amazing new startups and what makes them awesome{" "}
          </p>
          <a
            href="#"
            className="rounded-xl font-wix bg-[#6FFE93] text-black p-2"
          >
            Learn More
          </a>
        </div>

        <div className="card bg-[#006874]  col-span-2 md:col-span-1 rounded-lg flex flex-col items-start p-2 py-10 md:py-16 gap-2 relative">
          <h2 className="text-2xl font-semibold font-wix z-10">
            Product Reviews
          </h2>
          <a
            href="#"
            className="border-white font-montserrat border-[1px] rounded-xl px-2 py-[1px] text-sm z-10"
          >
            Social Solutions
          </a>
          <p className="z-10 font-montserrat">
            Get in-depth reviews on the latest devices from the world-best
            manufacturers
          </p>
          <a
            href="#"
            className="rounded-lg font-wix bg-[#97F0FF] text-black p-2 z-10"
          >
            Learn More
          </a>
          <img
            src={hardWareImg}
            alt=""
            className="absolute bottom-0 right-0 w-28 md:w-40 rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HotTopics;
