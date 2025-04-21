import React from "react";
import Navbar2 from "../components/Navbar2";
import KshitijLogo from "../assets/projects/Kshitij/KshitijBlack.png";
import KshitijTextBlack from "../assets/projects/Kshitij/KshitijTextBlack.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";
import Main from "../assets/projects/Kshitij/Main.jpg";
import Footer from "../components/Footer";
import { AnimatedTablet } from "../components/AnimatedTablet";

const Kshitij = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={KshitijLogo}
            alt=""
            className="h-16 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none"
          />
          <div className="flex items-center gap-2">
            <img
              src={KshitijTextBlack}
              alt=""
              className="h-14 sm:h-16 md:h-20 lg:h-24 pointer-events-none select-none"
            />
            <a
              href="https://mithibaikshitij.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            As one of Asia's biggest college cultural festivals, Kshitij draws
            in over 50,000+ attendees, 700+ committee members, and hosts 45+
            events across 8 departments. I collaborated with a fellow developer
            to design and build the official website for Kshitij's 17th edition,
            aiming to capture the festival's grandeur, energy, and legacy.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            We focused on creating a responsive, modern interface with smooth
            navigation and dynamic content. From detailed event listings and
            committee highlights to dedicated sections for Para Events and
            celebrity talk shows, every part of the site was designed to reflect
            the festival's inclusive and vibrant spirit. The website also
            featured interactive elements, media galleries, and performance
            highlights, serving as the central hub for participants and visitors
            alike throughout the event.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            The website served as the central digital hub for Kshitij 2023,
            helping attendees, participants, and committee members stay informed
            and engaged throughout the festival. With its clean layout, mobile
            optimization, and aesthetic that resonated with youth culture, it
            played a significant role in delivering a digital experience that
            matched the festival's on-ground vibe.
          </p>
        </div>

        <div className="flex flex-col mt-20 md:mt-0">
          <AnimatedTablet
            titleComponent={
              <>
                <h1 className="font-inter text-4xl font-semibold text-black">
                  Experience the grandeur of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Kshitij 2024
                  </span>
                </h1>
              </>
            }
          >
            <img
              src={Main}
              alt="hero"
              height={720}
              width={1400}
              className="mx-auto rounded-2xl object-cover h-full"
              draggable={false}
            />
          </AnimatedTablet>
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

export default Kshitij;
