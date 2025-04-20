import React from "react";
import Navbar2 from "../components/Navbar2";
import TedxLogo from "../assets/projects/TedxMithibaiCollege/TedxLogo.png";
import Main from "../assets/projects/Kshitij/Main.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";
import Footer from "../components/Footer";

const Tedx = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={TedxLogo}
            alt=""
            className="h-16 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none"
          />
          <div className="flex items-center gap-4">
            <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl">
              TEDxMithibaiCollege
            </h1>
            <a
              href="https://tedxmithibaicollege.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-link-m text-black text-5xl"></i>
            </a>
          </div>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I designed and developed the official website for
            TEDxMithibaiCollege, an independently organized TED event that
            brings together TED Talks videos and live speakers to inspire deep
            discussions and meaningful connections. The objective was to create
            a platform that not only reflected TED's global mission to spread
            ideas but also provided a seamless experience for local attendees.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            The website was built using React and Tailwind CSS, ensuring a
            responsive, fast, and visually engaging interface. It featured event
            details, speaker profiles, and TED's core mission, all designed with
            a clean and minimalistic approach aligned with TED's branding.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            A key feature of the project was the implementation of a ticketing
            system built with Node.js, Express, and MongoDB. This system allowed
            for the secure sale of 100 exclusive tickets. After purchase,
            attendees received a custom-generated, encrypted QR code via email,
            which was used for entry at the event. The QR code system ensured
            secure and efficient check-ins at the venue.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            By integrating both frontend and backend technologies, I created a
            fully functional and secure platform that enhanced the event
            experience and streamlined the ticketing process, all while
            maintaining the essence of TED’s commitment to knowledge sharing and
            community building.
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

export default Tedx;
