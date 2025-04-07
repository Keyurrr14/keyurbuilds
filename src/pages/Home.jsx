import React from "react";
import Navbar from "../components/Navbar";
import AnimateBlob from "../components/AnimateBlob";

const Home = () => {
  return (
    <>
      <Navbar />
      <AnimateBlob />
      <div className="md:w-2/3 lg:w-1/2 mx-4 md:mx-10 mt-28 md:mt-36 lg:mt-48">
        <h1 className="font-inter font-medium text-lg md:text-2xl lg:text-4xl text-zinc-500">
          Howdy! Meet your trusted design partner, <br /> bringing fresh ideas
          to life in tech, product, and beyond.
        </h1>
      </div>
      <h1 className="font-inter font-medium text-7xl sm:text-9xl md:text-[15vw] lg:text-[15vw] mx-4 md:mx-7 mt-5">
        Keyur Rathod
      </h1>
      <div className="-mt-20 md:-mt-8 lg:mt-0 mx-5">
        <svg
          width="1330"
          height="245"
          viewBox="0 0 1330 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M1 51.417C177.115 22.8131 225.474 34.3896 197 117.917C362.844 42.3989 438.991 66.192 452.5 242.917C542.565 24.6433 629.412 16.6745 833.5 155.917C729.807 -24.4558 909.711 -16.4603 1329 42.917"
            stroke="black"
            strokeWidth="10"
            className="animate-[draw_2.5s_ease-in-out_forwards]"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
            }}
          />
          <path
            d="M416.5 233.998C419.639 208.867 415.69 194.504 392.5 167.998M920.5 49.4985C1049.24 30.7553 1137.62 41.0954 1323.5 94.4985"
            stroke="black"
            strokeWidth="10"
            className="animate-[draw_2.5s_ease-in-out_1s_forwards]"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
            }}
          />
        </svg>
      </div>

      <div className="md:mt-48 w-full sm:w-3/4 md:w-full flex flex-col items-center justify-center mx-auto px-4">
        <h1 className="font-caveat text-2xl sm:text-4xl md:text-5xl text-zinc-500 font-bold text-center sm:ml-0 md:ml-96">
          from 2022 'til today'
        </h1>
        <h1 className="font-inter font-medium text-4xl sm:text-6xl md:text-8xl text-center mt-2">
          My latest work
        </h1>
      </div>
    </>
  );
};

export default Home;
