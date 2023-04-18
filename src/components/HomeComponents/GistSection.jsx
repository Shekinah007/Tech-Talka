import React from "react";
import gistImage from "../../assets/images/Free Photo _ Top view.png";
import avatar1 from "../../assets/images/avatarImgs/Ellipse 1.png";
import avatar2 from "../../assets/images/avatarImgs/Ellipse 1-1.png";
import avatar3 from "../../assets/images/avatarImgs/Ellipse 1-2.png";
import avatar4 from "../../assets/images/avatarImgs/Ellipse 1-3.png";
import avatar5 from "../../assets/images/avatarImgs/Ellipse 1-4.png";
import avatar6 from "../../assets/images/avatarImgs/Ellipse 1-5.png";

const BlogCard = ({ position, background, image }) => {
  return (
    <div
      className={` card  ${background} w-[330px] flex flex-col gap-2 md:w-56 rounded-lg p-2 text-xs self-center  ${position}`}
    >
      <div className="flex h-[67px] md:h-[40px] gap-2 items-center">
        <img src={image} className="w-8" />
        <h2 className="font-semibold">Blog Title</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur. Cursus sed una non vel turpis
        sit.
      </p>
      <a href="#" className="italic font-semibold text-gray-600">
        Learn More
      </a>
    </div>
  );
};

const GistSection = () => {
  return (
    <div className=" more-gist flex flex-col items-center justify-center bg-gray-100 w-full h-[1200px] md:h-[900px] gap-[120px] md:gap-[3px] z-10 px-10 md:px-20 ">
      <h2 className="font-bold text-3xl md:text-4xl self-start md:self-center">
        More Tech Gist
      </h2>
      <div className="flex flex-col  md:flex-row gap-72 md:gap-6 h-[800px] justify-center md:h-[600px] items-center animation-right">
        <div className="w-[400px] flex flex-col md:flex-col gap-3 h-[200px]  md:h-[500px] md:justify-center px-2 md:px-0">
          <BlogCard
            position="md:self-end"
            background={"bg-[#6FFE93]"}
            image={avatar1}
          />
          <BlogCard
            background={"bg-[#FAD7FF]"}
            position="md:self-start"
            image={avatar2}
          />
          <BlogCard
            position={"md:self-end"}
            background={"bg-[#97F0FF]"}
            image={avatar3}
          />
        </div>
        <div className="hidden md:block relative">
          <img
            src={gistImage}
            className="card h-[300px] md:h-[530px] rounded-xl md:rounded-3xl"
          />
          <div className="absolute bottom-0 text-white p-3 flex flex-col gap-4 text-xs md:text-base">
            <h3 className="font-semibold text-xl ">Work Life Balance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Adipiscing dapibus
              ullamcorper aliquam mi scelerisque suspendisse.
            </p>
            <div className="flex justify-between items-center text-sm">
              <div className="flex gap-2 items-center text-xs md:text-sm">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-inverse fa-stack-2x"></i>
                  <i class="fa fa-user fa-stack-1x "></i>
                </span>
                <p className="text-[11px] md:text-sm">Jane Cooper</p>
              </div>
              <p className="text-[11px] md:text-sm">10/28/12</p>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex-col-reverse flex md:flex-col gap-3 md:h-[500px] md:justify-center px-2 md:px-0">
          <BlogCard
            position="md:self-start"
            background={"bg-[#97F0FF]"}
            image={avatar4}
          />
          <BlogCard
            position={"md:self-end"}
            background={"bg-[#6FFE93]"}
            image={avatar5}
          />{" "}
          <BlogCard
            position="md:self-start"
            background={"bg-[#FAD7FF]"}
            image={avatar6}
          />
        </div>
      </div>
    </div>
  );
};

export default GistSection;
