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

const BlogCard = ({
  id,
  image,
  avatarImg,
  title,
  author,
  description,
  datePublished,
}) => {
  console.log("Card: ", id);
  return (
    <Link
      to={`/blog/${id}`}
      className="card bg-white rounded-lg w-[320px] md:w-[400px] lg:w-[320px]"
    >
      <img src={image} alt=" " className=" w-[full] rounded-t-lg" />
      <div className="flex flex-col gap-3 p-3">
        <h2 className="text-[22px] font-extrabold font-wix whitespace-nowrap overflow-hidden text-ellipsis">
          {title}
        </h2>
        <p className="blog-description font-montserrat text-md sm:text-lg text-gray-500">
          {/* Lorem ipsum dolor sit amet consectetur. Cursus sed urna non vel turpis
          sit. */}
          {description}
        </p>
        <div className="flex flex-row mt-4 justify-between items-center ">
          <div className="flex gap-3">
            <div className="h-[50px] w-[50px] overflow-hidden rounded-full">
              <img src={avatarImg} className="" />
            </div>
            <div className="flex flex-col justify-between">
              <p className="font-bold text-gray-500 font-wix text-sm">
                {author}
              </p>
              <p className="text-sm font-wix">{datePublished}</p>
            </div>
          </div>
          <button className="">
            <box-icon name="share-alt"></box-icon>
          </button>
        </div>
      </div>
    </Link>
  );
};

const GistSection = ({ blogs }) => {
  console.log("Gist: ", blogs);
  return (
    <div className="more-gist flex flex-col items-center justify-center bg-gray-100 w-full py-10 md:py-[120px] gap-[20px] z-10 px-10 md:px-20 animation-fade ">
      <h2 className="font-bold text-3xl md:text-4xl self-start md:self-center">
        More Tech Gist
      </h2>
      <div className="flex flex-wrap gap-6  justify-center">
        <div className="gist flex flex-row flex-wrap gap-6 justify-center ">
          {/* <BlogCard image={cardImg} avatarImg={avatar1} />
          <BlogCard image={cardImg1} avatarImg={avatar2} />
          <BlogCard image={cardImg2} avatarImg={avatar3} /> */}
          {blogs &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  id={blog.id}
                  key={blog.id}
                  image={cardImg}
                  avatarImg={avatar1}
                  title={blog.attributes.Blog_title}
                  author={blog.attributes.author.data.attributes.Author_names}
                  description={blog.attributes.Blog_description}
                  datePublished={blog.attributes.publishedAt.slice(0, 10)}
                />
              );
            })}
        </div>

        <div className="gist hidden lg:flex flex-row flex-wrap  gap-6 justify-center ">
          <BlogCard image={cardImg3} avatarImg={avatar4} />
          <BlogCard image={cardImg4} avatarImg={avatar5} />
          <BlogCard image={cardImg5} avatarImg={avatar6} />
        </div>
      </div>
      <Link to={"/"} className="font-wix text-[#9C02C9] text-xl font-bold">
        Read More Articles
      </Link>
    </div>
  );
};

export default GistSection;
