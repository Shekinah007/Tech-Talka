import React from "react";
import { Link } from "react-router-dom";
import gistImage from "../../assets/images/Free Photo _ Top view.png";
import avatar1 from "../../assets/images/avatarImgs/Ellipse 1.png";
import avatar2 from "../../assets/images/avatarImgs/Ellipse 1-1.png";
import avatar3 from "../../assets/images/avatarImgs/Ellipse 1-2.png";
import avatar4 from "../../assets/images/avatarImgs/Ellipse 1-3.png";
import avatar5 from "../../assets/images/avatarImgs/Ellipse 1-4.png";
import avatar6 from "../../assets/images/avatarImgs/Ellipse 1-5.png";

import cardImg from "../../assets/images/gistImages/Media.png";
import cardImg1 from "../../assets/images/gistImages/Media-1.png";
import cardImg2 from "../../assets/images/gistImages/Media-2.png";
import cardImg3 from "../../assets/images/gistImages/Media-3.png";
import cardImg4 from "../../assets/images/gistImages/Media-4.png";
import cardImg5 from "../../assets/images/gistImages/Media-5.png";

const BlogCard = ({ image, avatarImg, title }) => {
  return (
    <div className="card bg-white rounded-lg w-[320px] md:w-[400px] lg:w-[320px]">
      <img src={image} alt=" " className=" w-[full] rounded-t-lg" />
      <div className="flex flex-col gap-3 p-3">
        <h2 className="text-[22px] font-extrabold">Blog Title</h2>
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur. Cursus sed urna non vel turpis
          sit.
        </p>
        <div className="flex flex-row justify-between items-center ">
          <div className="flex gap-3">
            <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
              <img src={avatarImg} className="" />
            </div>
            <div className="flex flex-col justify-between">
              <h3 className="font-bold text-sm">Brooklyn Simmons</h3>
              <p className="text-sm">8/30/14</p>
            </div>
          </div>
          <button className="">
            <box-icon name="share-alt"></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

const GistSection = () => {
  return (
    <div className="more-gist flex flex-col items-center justify-center bg-gray-100 w-full py-[120px] gap-[20px] z-10 px-10 md:px-20 ">
      <h2 className="font-bold text-3xl md:text-4xl self-start md:self-center">
        More Tech Gist
      </h2>
      <div className="flex flex-wrap gap-6  justify-center">
        <div className="flex flex-row flex-wrap gap-6 justify-center">
          <BlogCard image={cardImg} avatarImg={avatar1} />
          <BlogCard image={cardImg1} avatarImg={avatar2} />
          <BlogCard image={cardImg2} avatarImg={avatar3} />
        </div>

        <div className="hidden lg:flex flex-row flex-wrap  gap-6 justify-center">
          <BlogCard image={cardImg3} avatarImg={avatar4} />
          <BlogCard image={cardImg4} avatarImg={avatar5} />
          <BlogCard image={cardImg5} avatarImg={avatar6} />
        </div>
      </div>
      <Link to={"/"} className="text-[#9C02C9] text-xl font-bold">
        Read More Articles
      </Link>
    </div>
  );
};

export default GistSection;
