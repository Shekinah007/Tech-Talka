import React from "react";

const SocialProof = () => {
  return (
    <div className="social-proof bg-white flex flex-col items-center gap-4 w-full font-bold py-16">
      <h2 className="text-xl md:text-2xl text-center ">
        Join 4,000+ companies already growing
      </h2>
      <div className="flex flex-wrap justify-between bg-gray-200 p-3 text-sm  md:text-base text-gray-600 rounded-md  w-11/12">
        <a href="#">Layers</a>
        <a href="#">Sisiphus</a>
        <a href="#">Circooles</a>
        <a href="#">Catalog</a>
        <a href="#">Quotient</a>
      </div>
    </div>
  );
};

export default SocialProof;
