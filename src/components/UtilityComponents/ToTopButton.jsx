import React, { useEffect } from "react";

const ToTopButton = ({ targetElement }) => {
  useEffect(() => {
    const main = document.querySelector(targetElement);
    const toTopBtn = document.querySelector(".to-top");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        toTopBtn.classList.toggle("show-to-top", entry.isIntersecting);
      });
    });

    observer.observe(main);
  });

  return (
    <button
      className="fa fa-3x fa-arrow-circle-o-up text-gray-500 opacity-75 hover:text-green-800 active:text-gray-500 
      fixed right-[40px] bottom-[35px] overflow-hidden duration-500 h-0 z-50 cursor-pointer to-top"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    ></button>
  );
};

export default ToTopButton;
