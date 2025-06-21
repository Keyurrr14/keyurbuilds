import React from "react";
import nextjs from "../assets/nextjs.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import three from "../assets/three.svg";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";

const Components = () => {
  return (
    <div>
      <Navbar2 />
      <h1
        id="story"
        className="w-full md:w-2/3 font-inter font-medium text-2xl sm:text-4xl md:text-6xl px-4 sm:px-6 md:px-10 mt-28 sm:mt-40 md:mt-36"
      >
        Awesome <span className="font-bold text-yellow-400">CSS</span> and{" "}
        <span className="font-bold text-yellow-400">ThreeJS</span> components
        for your React project
      </h1>
      <div className="flex flex-wrap gap-5 mt-5 w-full md:w-2/3 px-4 sm:px-6 md:px-10">
        <div className="flex justify-center items-center gap-2">
          <img src={nextjs} alt="" className="h-8" />
          <h2 className="text-lg md:text-xl">Next.js</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={react} alt="" className="h-8" />
          <h2 className="text-lg md:text-xl">React</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={tailwind} alt="" className="h-10" />
          <h2 className="text-lg md:text-xl">Tailwind</h2>
        </div>
        <div className="flex justify-center items-center gap-2">
          <img src={three} alt="" className="h-10" />
          <h2 className="text-lg md:text-xl">Three.js</h2>
        </div>
      </div>
      <h1
        id="story"
        className="w-full md:w-2/3 font-inter font-medium text-zinc-600 text-lg sm:text-lg md:text-xl px-4 sm:px-6 md:px-10 mt-5"
      >
        Copy paste the most popular components from the web and use them in your
        project without having to worry about styling and animations.
      </h1>

      <div className="flex flex-col items-center justify-center mt-20 font-inter bg-zinc-100 py-10 mx-4 sm:mx-10 rounded-3xl">
        <h1 className="font-bold text-center text-4xl text-zinc-500 sm:text-5xl">
          Coming Soon
        </h1>
        <h3 className="mt-3 px-2 text-center text-base text-zinc-500 sm:text-lg">
          I'm working hard to bring you more components. Bookmark this page to
          stay tuned !
        </h3>
      </div>

      <Footer/>
    </div>
  );
};

export default Components;
