import React from "react";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/HomeComponents/NewsLetter";
import Footer from "../components/Footer";
import avatarImg from "../assets/images/avatarImgs/Ellipse 1-1.png";
import rectImg from "../assets/images/blogPageImages/Rectangle 30.png";
import img2 from "../assets/images/blogPageImages/Image-2.png";

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
      <div className="px-4 md:px-36 flex flex-col items-center gap-5 text-gray-500">
        <img src={rectImg} alt=" " className="w-full" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <hr className="w-full" />
        <h2 className="font-bold text-xl text-left self-start text-black">
          Introduction
        </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in
          ea voluptate velit esse quam nihil molestiae consequatur, vel illum
          qui dolorem eum fugiat quo voluptas nulla pariatur?
        </p>
        <div className="w-full flex flex-col justify-start gap-2">
          <img src={img2} alt=" " className="w-full md:h-[450px]" />
          <p className="text-gray-500 text-xs">
            Image courtesy of Laura Davidson via Unsplash
          </p>
        </div>
        <p>
          Dui accumsan sit amet nulla facilisi morbi. Egestas dui id ornare arcu
          odio ut. Mauris a diam maecenas sed enim ut sem viverra aliquet.
          Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
          sociis.
        </p>
        <p>
          Morbi tincidunt augue interdum velit euismod. Porta lorem mollis
          aliquam ut porttitor leo a. Est ante in nibh mauris cursus mattis
          molestie. Libero nunc consequat interdum varius. Placerat vestibulum
          lectus mauris ultrices eros in cursus. Vestibulum rhoncus est
          pellentesque elit ullamcorper dignissim. Nulla malesuada pellentesque
          elit eget gravida cum sociis natoque penatibus. In vitae turpis massa
          sed elementum tempus egestas sed sed.
        </p>
        <p>
          Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum
          sociis. Morbi tincidunt augue interdum velit euismod. Porta lorem
          mollis aliquam ut porttitor leo a. Est ante in nibh mauris cursus
          mattis molestie. Libero nunc consequat interdum varius.
        </p>
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-black text-xl font-bold ">Software and tools</h3>
          <p>
            Morbi tincidunt augue interdum velit euismod. Porta lorem mollis
            aliquam ut porttitor leo a. Est ante in nibh mauris cursus mattis
            molestie. Libero nunc consequat interdum varius.
          </p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <h3 className="text-black text-xl font-bold ">Other resources</h3>
          <p>
            Libero nunc consequat interdum varius. Placerat vestibulum lectus
            mauris ultrices eros in cursus. Vestibulum rhoncus est pellentesque
            elit ullamcorper dignissim. Nulla malesuada pellentesque elit eget
            gravida cum sociis natoque penatibus. In vitae turpis massa sed
            elementum tempus egestas sed sed.
          </p>
          <ol>
            <li>
              1. Lectus id duis vitae portitor enim{" "}
              <span className="underline">graida morbi</span>.
            </li>
            <li>2. Eu turpis</li>
          </ol>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BlogPage;
