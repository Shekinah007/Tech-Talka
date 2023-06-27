import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import Footer from "../components/Footer";
import avatarImg from "../assets/images/avatarImgs/Ellipse 1-1.png";
import rectImg from "../assets/images/blogPageImages/Rectangle 30.png";
import img2 from "../assets/images/blogPageImages/Image-2.png";
import img1 from "../assets/images/blogPageImages/Image-1.png";

const BlogPage = () => {
  const { blogId } = useParams();
  console.log("ID: ", blogId);

  const [blog, setBlog] = useState();

  useEffect(() => {
    fetch("https://tek-talka.onrender.com/api/blog-posts?populate=*")
      .then((res) => res.json())
      .then((data) => {
        let array = data.data;

        let found = array.find((element) => element.id == blogId);
        setBlog(found.attributes);
        console.log("Blog: ", blog);
      });
  }, []);

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
    <div className="page flex flex-col items-center pt-4 bg-gray-100 overflow-x-hidden min-h-screen justify-between">
      <Navbar />
      <div className="flex flex-col items-center p-5 md:p-20 text-center gap-4 ">
        <p className=" font-wix p-2 text-gray-500 font-semibold rounded-3xl">
          {blog
            ? blog.blog_posts_category.data.attributes.Blog_category_name
            : "Investment"}
        </p>
        <h1 className="font-bold text-3xl font-wix md:text-4xl text-center">
          {blog ? blog.Blog_title : "Lorem ipsum dolor consecrtouffv akh v s"}
        </h1>
        <p className="text-center  text-gray-500 font-wix">
          The magic of biotechnology
        </p>
        <div className="flex flex-wrap flex-col md:flex-row items-center justify-between md:w-1/2">
          <div className="flex flex-col justify-start gap-3">
            <div className="flex gap-2 text-sm flex-row justify-center items-center font-semibold ">
              <p className=" text-left font-wix text-sm">Written by</p>

              <img src={avatarImg} alt=" " className="w-8" />
              <p className="font-wix">
                {blog
                  ? blog.author.data.attributes.Author_names
                  : "Jane Cooper"}{" "}
              </p>
              <span className="text-gray-400 ">
                <span className="font-wix">
                  {blog ? blog.publishedAt.slice(0, 10) : "10/28/12"}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {blog && (
        <div className="px-4 font-montserrat leading-7 md:px-36 py-1 pb-2 flex flex-col items-center gap-8 text-sm text-gray-500">
          {blog.Blog_description}
        </div>
      )}
      <div className="mb-20 mt-12 flex flex-col items-center">
        <p className="font-wix text-xl">Share to friends</p>

        <div className="flex flex-row gap-6 mt-2">
          <box-icon
            name="meta"
            type="logo"
            size="lg"
            animation="burst-hover"
          ></box-icon>{" "}
          <box-icon
            type="logo"
            name="twitter"
            size="lg"
            animation="burst-hover"
          ></box-icon>
          <box-icon type="logo" size="lg" name="whatsapp"></box-icon>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BlogPage;
