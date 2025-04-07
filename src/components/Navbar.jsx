import React, { useState } from "react";
import sun from "../assets/sun.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("hey");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavLinks = () => (
    <>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full font-inter ${
          activeLink === "hey" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("hey");
            setIsMenuOpen(false);
          }}
        >
          Hey
        </a>
      </div>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full ${
          activeLink === "work" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("work");
            setIsMenuOpen(false);
          }}
        >
          Work
        </a>
      </div>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full ${
          activeLink === "story" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("story");
            setIsMenuOpen(false);
          }}
        >
          Story
        </a>
      </div>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full ${
          activeLink === "chat" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("chat");
            setIsMenuOpen(false);
          }}
        >
          Chat
        </a>
      </div>
    </>
  );

  return (
    <div className="flex justify-center relative font-inter animate-bounce-in">
      {/* Desktop Menu */}
      <div className="hidden sm:flex font-inter w-full sm:w-3/4 md:w-1/2 lg:w-[38%] rounded-full justify-center gap-2 sm:gap-4 bg-black text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl my-2 sm:my-3 animate-bounce-in">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden w-full flex justify-between bg-black rounded-full px-4 py-3 mt-3 mx-2 animate-bounce-in">
        <div>
          <img className="h-6" src={sun} alt="" />
        </div>
        <div className="flex items-center gap-1 text-zinc-400">
          <h1 className="text-lg font-semibold">Menu</h1>
          <button
            onClick={toggleMenu}
            className="text-zinc-400  focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-14 sm:right-6 md:right-12 lg:right-16 mt-3 w-[95%] bg-black rounded-3xl shadow-lg transform transition-all duration-300 ease-in-out z-50 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-1 gap-2 text-zinc-400 text-lg">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
