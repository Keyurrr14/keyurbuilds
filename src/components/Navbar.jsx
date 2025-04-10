import React, { useState } from "react";
import sun from "../assets/sun.svg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("hey");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
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
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Hey
        </a>
      </div>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full ${
          activeLink === "story" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#story"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("story");
            setIsMenuOpen(false);
            scrollToSection("story");
          }}
        >
          Story
        </a>
      </div>
      <div
        className={`px-2 sm:px-3 md:px-4 py-1 sm:py-2 my-1 sm:my-2 rounded-full ${
          activeLink === "work" ? "bg-[#4D4000] text-yellow-400" : ""
        }`}
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            setActiveLink("work");
            setIsMenuOpen(false);
            scrollToSection("work");
          }}
        >
          Work
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
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
            });
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
      <div className="hidden fixed sm:flex font-inter w-full sm:w-3/4 md:w-1/2 lg:w-[38%] rounded-full justify-center gap-2 sm:gap-4 bg-black text-zinc-400 text-sm sm:text-base md:text-lg lg:text-xl my-2 sm:my-3 animate-bounce-in z-50">
        <NavLinks />
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed sm:hidden w-[90%] flex justify-between bg-black rounded-full px-4 py-3 mt-3 mx-2 animate-bounce-in z-50">
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

      {isMenuOpen && (
        <div
          onClick={toggleMenu}
          className="sm:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-14 left-1/2 -translate-x-1/2 mt-3 w-[95%] bg-black rounded-3xl shadow-lg z-50 origin-top transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
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
