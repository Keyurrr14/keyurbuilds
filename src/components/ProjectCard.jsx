import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow.svg";

const ProjectCard = ({
  logo,
  logoText,
  description,
  poster1,
  poster2,
  route,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
    window.scrollTo(0, 0);
  };

  return (
    <div className="px-4 sm:px-20 mt-10">
      <div
        className="bg-[#F2F2F2] rounded-3xl font-inter overflow-hidden group relative cursor-pointer"
        onClick={handleClick}
      >
        <div className="absolute -top-64 -right-80 sm:-top-36 sm:-right-36 w-[800px] h-[800px] rounded-full blur-[3000px] transition-all duration-300 group-hover:bg-yellow-400 group-hover:blur-[500px] sm:group-hover:blur-[250px] z-0"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between px-4 sm:px-14 py-5">
            <div className="flex items-center gap-1 sm:gap-4">
              <img
                src={logo}
                alt=""
                className="h-16 sm:h-28 pointer-events-none select-none"
              />
              {logoText.includes(".png") ||
              logoText.includes(".jpg") ||
              logoText.includes(".jpeg") ||
              logoText.includes(".svg") ? (
                <img
                  src={logoText}
                  alt=""
                  className="h-10 sm:h-20 pointer-events-none select-none"
                />
              ) : (
                <span className="text-lg sm:text-5xl font-bold">
                  {logoText}
                </span>
              )}
            </div>
            <div>
              <img
                src={arrow}
                alt=""
                className="h-10 sm:h-20 hidden lg:block pointer-events-none select-none"
              />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-zinc-500 font-medium px-4 sm:px-14 w-full sm:w-5/6">
            {description}
          </p>
          <div className="flex items-center justify-center gap-2 mt-14 sm:mt-28">
            <img
              src={poster1}
              alt=""
              className="h-[60vw] sm:h-[30vw] sm:-mb-10 -rotate-6 transition-all duration-300 border-4 border-white rounded-3xl group-hover:-translate-y-7 group-hover:-rotate-12 pointer-events-none select-none"
            />
            <img
              src={poster2}
              alt=""
              className="hidden sm:block h-[50vw] sm:h-[30vw] -mb-10 rotate-3 transition-all duration-300 border-4 border-white rounded-3xl group-hover:-translate-y-7 group-hover:rotate-12 pointer-events-none select-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
