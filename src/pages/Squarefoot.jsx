import React from "react";
import Navbar2 from "../components/Navbar2";
import SquarefootLogo from "../assets/projects/Squarefoot/SquarefootLogo.png";
import Footer from "../components/Footer";
import Main from "../assets/projects/Kshitij/Main.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";

const Squarefoot = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={SquarefootLogo}
            alt=""
            className="h-16 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none"
          />
          <div className="flex items-center gap-4 mt-5">
            <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              squarefoot.studio
            </h1>
            <a
              href="https://squarefoot.studio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I designed and developed the official website for Squarefoot Studio,
            a Mumbai-based architectural and interior design firm known for its
            expertise in residential, commercial, and hospitality projects. The
            objective was to build a clean, elegant, and functional platform
            that reflects the studio’s ethos—crafting exceptional spaces with
            passion and precision. The site needed to highlight their diverse
            portfolio while communicating their design philosophy, values, and
            client-first approach.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            The visual design focused on minimalism and sophistication, using a
            neutral color palette, balanced typography, and spacious layouts to
            echo the firm’s aesthetic sensibilities. I structured the website to
            offer seamless navigation through their services, past projects, and
            core values. A prominent emphasis was placed on high-quality imagery
            and a smooth user flow to ensure that the content feels immersive,
            inspiring trust and professionalism from the very first scroll.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Technically, the website was built to be fast, responsive, and
            optimized for all screen sizes. I implemented smooth scroll effects,
            subtle animations, and clean transitions to bring a polished, modern
            feel to the experience. The backend was designed to allow for easy
            content updates—making it simple for the Squarefoot team to add new
            projects or modify text without needing technical assistance. I also
            followed SEO best practices to ensure discoverability and better
            reach for potential clients.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            This project allowed me to combine clean design principles with
            purposeful user experience to effectively represent a premium design
            brand. Collaborating closely with the Squarefoot team, I ensured
            that every detail—from layout choices to page speed
            optimization—reflected their dedication to quality and precision.
            The final result is a professional and elegant digital presence that
            positions Squarefoot Studio as a trusted and visionary player in the
            architecture and interior design space.
          </p>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <div className="w-full rounded-lg overflow-hidden">
            <img
              src={Main}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
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

export default Squarefoot;
