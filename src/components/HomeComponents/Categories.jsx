import React from "react";
import artImg from "../../assets/images/Frame 19.png";
import conferenceImg from "../../assets/images/Frame 20.png";
import agroImg from "../../assets/images/Frame 21.png";
import startUpImg from "../../assets/images/Frame 22.png";
import aiImg from "../../assets/images/Frame 23.png";

const Categories = () => {
  return (
    <div className="categories w-11/12 flex flex-col gap-4 py-32 pb-5 md:pb-10 ">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <h2 className="font-bold text-4xl">Categories</h2>
        <div className="flex gap-2 text-xl font-semibold">
          <a
            href="#"
            className="rounded-lg p-1 bg-green-400 hover:bg-green-400 duration-500 hover:no-underline"
          >
            All
          </a>
          <a
            href="#"
            className="rounded-lg p-1 hover:bg-green-400 duration-500 hover:no-underline"
          >
            Trending
          </a>
          <a
            href="#"
            className="rounded-lg p-1 hover:bg-green-400 duration-500 hover:no-underline"
          >
            Start Ups
          </a>
          <a
            href="#"
            className="rounded-lg p-1 hover:bg-green-400 duration-500 hover:no-underline"
          >
            Tech
          </a>
        </div>
      </div>
      <div className="categories-images flex  whitespace-nowrap flex-row overflow-y-hidden  overflow-x-scroll md:overflow-hidden  gap-4  md:grid md:grid-cols-3 animation-right">
        <div className="hidden md:flex h-[390px] flex-col gap-[20px] col-span-2">
          <div class="grid grid-cols-2 gap-2">
            <a href="#" className="">
              <img
                src={artImg}
                className="rounded-3xl md:h-[290px] duration-500 hover:scale-105 "
              />
            </a>
            <a href="#" className="">
              <img
                src={conferenceImg}
                className="rounded-3xl md:h-[290px] duration-500 hover:scale-105"
              />
            </a>
          </div>
          <div>
            <div class="grid gap-2 grid-cols-3">
              <a href="#" className="col-span-2">
                <img
                  src={startUpImg}
                  className="col-span-2 h-[70px] md:h-[150px] duration-500 hover:scale-105"
                ></img>
              </a>
              <a href="#" className="">
                <img
                  src={aiImg}
                  className="h-[70px] md:h-[150px]  duration-500 hover:scale-105"
                />
              </a>
            </div>
          </div>
        </div>
        <img
          src={agroImg}
          className="hidden md:inline-block h-[380px] md:h-[460px] w-[390px]"
        />

        {/* Mobile View */}

        <img
          src={agroImg}
          className="inline-block md:hidden h-[380px] md:h-[460px] w-[390px]"
        />
        <img
          src={artImg}
          className="inline-block md:hidden h-[380px] md:h-[460px] w-[390px]"
        />
        <img
          src={conferenceImg}
          className="inline-block md:hidden h-[380px] md:h-[460px] w-[390px]"
        />
        {/* /////////////////////////////////// */}
      </div>
      <div className="flex justify-between items-center">
        <div className="hidden md:visible"></div>
        <a href="#" className="text-green-800 text-lg font-bold ">
          See All
        </a>
        <div className="flex gap-2">
          <a href="#" className="card rounded-full fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x text-green-500"></i>
            <i class="fa fa-arrow-left fa-stack-1x"></i>
          </a>
          <a href="#" className="card rounded-full fa-stack fa-lg">
            <i class="fa fa-circle fa-stack-2x text-green-500"></i>
            <i class="fa fa-arrow-right fa-stack-1x"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categories;
