import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import Footer from "../components/Footer";
import avatarImg from "../assets/images/avatarImgs/Ellipse 1-1.png";
import rectImg from "../assets/images/blogPageImages/Rectangle 30.png";

const BlogPage = () => {
  return (
    <div className="flex flex-col items-center pt-4">
      <Navbar />
      <div className="flex flex-col items-center p-5 md:p-20 text-center gap-4">
        <p className="card p-2 text-[#9C02C9] font-semibold rounded-3xl border-b-2 border-[#9C02C9]">
          Investment
        </p>
        <h1 className="font-bold text-4xl text-center">
          Lorem ipsur dolor sit amet consectetur. Maecenas non suspendisse dui
          et.
        </h1>
        <p className="text-center font-semibold">
          Lorem ipsur dolor sit amet consectetur. Maecenas non suspendisse dui
          et.
        </p>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-between md:w-1/2">
          <div className="flex flex-col justify-start gap-3">
            <p className=" text-left italic text-sm">Written by</p>
            <div className="flex gap-2 text-sm font-semibold ">
              <img src={avatarImg} alt=" " className="w-8" />
              <p>Jane Cooper - </p>
              <span className="text-gray-400 ">
                <span>10/28/12</span>
              </span>
            </div>
          </div>
          <button className="card rounded-3xl px-4 p-2 flex items-center gap-2 text-lg text-[#9C02C9]">
            <span>Share </span>
            <i className="bx bx-share-alt"></i>{" "}
          </button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BlogPage;
