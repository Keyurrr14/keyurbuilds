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
          <div className="flex items-center gap-4 mt-5">
            <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              MoronMedia
            </h1>
            <a
              href="https://moronmedia.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I designed and developed the official website for Moron Media, a
            creative agency recognized for its work with some of the biggest
            names in the industry including META, Saregama India, Redbull,
            Samsung, and Bonkers Corner. The aim was to create a digital
            presence that matched the scale, energy, and creativity of their
            projects—ranging from music videos and fashion films to large-scale
            live events and brand campaigns. The site needed to be bold,
            visual-first, and capable of conveying the agency’s unique identity
            at a glance.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            From the outset, I focused on creating an immersive user experience
            with high-impact visuals, smooth animations, and a layout that feels
            both modern and editorial. I designed the homepage to feature a
            dynamic showcase of recent projects—like the Diluminati Tour 2024
            and campaigns for artists such as Iqlipse Nova and Prakriti
            Kakkar—giving users an instant look into the scale and quality of
            Moron Media’s work. The site architecture was carefully planned to
            ensure seamless navigation between their service offerings, past
            work, and contact information.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            On the technical side, I built the site to be fully responsive and
            optimized for performance across devices. Attention was given to
            load times, transitions, and how the visual elements interact on
            scroll. I incorporated modern web practices to support video
            integration and high-resolution imagery. Every design choice—from
            typography to color palette—was made to align with Moron Media’s
            bold and youthful brand aesthetic.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            This project challenged me to balance creative freedom with
            performance and usability. It was about telling a story through
            design—making sure that anyone who lands on the site instantly
            understands what Moron Media does and the kind of impact they make
            in the creative world. Seeing the final product live, and knowing it
            reflects the spirit of a fast-moving, boundary-pushing agency, made
            this one of the most rewarding projects I’ve worked on.
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

export default MoronMedia;
