import React from "react";
import Navbar2 from "../components/Navbar2";
import MCCLogo from "../assets/projects/MCC/MCCLogo.png";
import MCCText from "../assets/projects/MCC/MCCText.png";
import Footer from "../components/Footer";
import Main from "../assets/projects/Kshitij/Main.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";

const MCC = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={MCCLogo}
            alt=""
            className="h-20 sm:h-24 md:h-28 lg:h-32 pointer-events-none select-none"
          />
          <div className="flex items-center gap-4">
            <img
              src={MCCText}
              alt=""
              className="h-14 sm:h-16 md:h-20 lg:h-24 pointer-events-none select-none"
            />
            <a
              href="https://mithibaicultural.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I co-developed the official website for the Mithibai Cultural
            Committee, the flagship cultural body of Mithibai College known for
            its vibrant legacy and unmatched achievements across India’s top
            cultural festivals. The goal was to create a digital space that
            captured the essence of the Committee’s impact—from victories at
            Mood Indigo, Youth Festival, and Umang to organizing in-house
            extravaganzas like Annual Day and Mithibai Kshitij. The website was
            designed to celebrate this legacy, showcase events, and serve as a
            central hub for both audiences and committee members.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            This project was made possible through a collaborative effort with a
            talented team of five classmates during our first year of college.
            We built the initial version using React.js and Vanilla CSS,
            focusing on a clean, scroll-based single-page design that balanced
            content-rich sections with intuitive navigation. As the design
            requirements evolved, we decided to revamp the project using
            Tailwind CSS to improve development speed, responsiveness, and code
            maintainability. Tailwind’s utility-first approach allowed us to
            keep the UI consistent and scalable while reducing the amount of
            redundant custom CSS.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            From layout design to content placement, the site was structured to
            guide visitors through the Committee’s journey. We emphasized major
            achievements, leadership highlights, and upcoming event
            announcements while maintaining a youthful and elegant aesthetic.
            High-resolution visuals, carefully placed micro-interactions, and
            performance optimization techniques ensured a seamless experience
            across devices.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            This project was a defining milestone early in my development
            journey. It not only helped me solidify my frontend fundamentals but
            also taught me the value of teamwork, design communication, and
            iterative improvement. Most importantly, it was incredibly
            fulfilling to contribute to a website that represents the cultural
            heartbeat of our college and will continue to inspire future
            students.
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

export default MCC;
