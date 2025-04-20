import React from "react";
import Navbar2 from "../components/Navbar2";
import MoronMediaLogo from "../assets/projects/MoronMedia/MoronMediaLogo.png";
import Main from "../assets/projects/Kshitij/Main.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";
import Footer from "../components/Footer";

const MoronMedia = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={MoronMediaLogo}
            alt=""
            className="h-12 sm:h-14 md:h-16 lg:h-18 pointer-events-none select-none"
          />
          <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-5">
            MoronMedia
          </h1>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus in cupiditate provident, autem alias commodi minus,
            illo iste consequatur quibusdam odit temporibus reprehenderit
            voluptate deserunt ducimus eaque, necessitatibus est? Doloremque.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus in cupiditate provident, autem alias commodi minus,
            illo iste consequatur quibusdam odit temporibus reprehenderit
            voluptate deserunt ducimus eaque, necessitatibus est? Doloremque.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptatibus in cupiditate provident, autem alias commodi minus,
            illo iste consequatur quibusdam odit temporibus reprehenderit
            voluptate deserunt ducimus eaque, necessitatibus est? Doloremque.
          </p>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="w-full rounded-lg overflow-hidden">
            <img src={Main} alt="" className="h-full w-full object-contain pointer-events-none select-none" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 px-4 sm:px-8 md:px-12 lg:px-20 my-4 sm:my-2 pb-6 sm:pb-10">
          <div className="w-full sm:w-1/2 rounded-lg overflow-hidden">
            <img
              src={KshitijPoster}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
          <div className="w-full sm:w-1/2 rounded-lg overflow-hidden">
            <img
              src={KshitijPoster}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MoronMedia;
