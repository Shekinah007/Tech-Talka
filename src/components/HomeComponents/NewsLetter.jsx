import React from "react";

const NewsLetter = () => {
  return (
    <div className="newsletter flex flex-col md:flex-row gap-8 justify-between  w-full p-16 px-12 bg-gray-100">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Sign up for our newsletter</h2>
        <p className="text-gray-500 text-sm">
          Be the first to know about our releases and industry news and
          insights.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <form className="flex flex-col items-stretch md:items-center md:flex-row gap-2">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="rounded-md p-1"
          ></input>
          <button className="card bg-fuchsia-700 rounded-md p-1 text-white">
            Subscribe
          </button>
        </form>
        <p className="text-gray-500 text-sm">
          We care about your date in our
          <a href="#" className="underline">
            {" "}
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
