import React from "react";
import { useState, useEffect } from "react";

import ToTopButton from "../components/UtilityComponents/ToTopButton";
import Navbar from "../components/Navbar";
import HotTopics from "../components/HomeComponents/HotTopics";
import Footer from "../components/Footer";
import mainImg from "../assets/images/Rectangle 6.png";
import GistSection from "../components/HomeComponents/GistSection";
import Categories from "../components/HomeComponents/Categories";
import SocialProof from "../components/HomeComponents/SocialProof";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    let the_animation = document.querySelectorAll(
      ".animation, .animation-right, .animation-left, .animation-bottom, .animation-fade"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animation");
          } else {
            entry.target.classList.remove("scroll-animation");
          }
        });
      },
      { threshold: 0.2 }
    );

    for (let i = 0; i < the_animation.length; i++) {
      const elements = the_animation[i];

      observer.observe(elements);
    }
  });

  useEffect(() => {
    let page = document.querySelectorAll(".page");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("page-animation");
        } else {
          entry.target.classList.remove("page-animation");
        }
      });
    });

    for (let i = 0; i < page.length; i++) {
      const elements = page[i];

      observer.observe(elements);
    }
  });

  return (
    <>
      <ToTopButton targetElement={".scroll-point"} />

      <div className="Home page flex flex-col justify-center items-center bg-gray-100">
        <Navbar />

        <div className="flex flex-col gap-7 mt-8 w-11/12 z-10">
          <div className="text-[57px] font-bold w-full md:w-[482px] leading-[56px]">
            Lorem ipsur dolor sit amet consectetur.
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500 font-semibold text-sm">
              Lorem ipsur dolor sit amet consectetur.
            </p>
            <Link to={"/Blog"}>
              <i className="bx bx-right-arrow-alt bx-lg  bx-fade-right text-fuchsia-700 rounded-3xl w-12 h-12 flex items-center justify-center card"></i>
            </Link>
          </div>
          <img src={mainImg} className="object-contain"></img>
        </div>

        <div className="underlay bg-fuchsia-700 h-[850px] md:h-[700px] w-full underlay absolute top-[470px] md:top-[600px] -z-9"></div>

        <HotTopics />

        <div className="scroll-point flex flex-col w-full items-center">
          <Categories />
          <GistSection />
          <SocialProof />
          <NewsLetter />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
