import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center relative font-inter animate-bounce-in">
      {/* Desktop and Mobile Navbar */}
      <div className="fixed top-2 flex font-inter w-[95%] sm:w-3/4 md:w-1/2 lg:w-[30%] rounded-full justify-between items-center bg-black text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl my-2 sm:my-3 animate-bounce-in z-50 px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="text-zinc-400 hover:text-white transition-colors group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 transition-transform duration-300 ease-in-out group-hover:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex items-center">
          <a href="mailto:keyurrathod9920@gmail.com">
            <h1 className="text-xl font-semibold text-yellow-400 bg-[#4D4000] rounded-full px-4">
              Start new project
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
