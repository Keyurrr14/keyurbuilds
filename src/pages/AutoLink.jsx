import React from "react";
import Navbar2 from "../components/Navbar2";
import AutoLinkLogo from "../assets/projects/AutoLink/AutoLinkLogo.png";
import Main from "../assets/projects/AutoLink/Main.jpg";
import AutoLinkPoster3 from "../assets/projects/AutoLink/AutoLinkPoster3.jpg";
import AutoLinkPoster4 from "../assets/projects/AutoLink/AutoLinkPoster4.jpg";
import AutoLinkPoster5 from "../assets/projects/AutoLink/AutoLinkPoster5.jpg";
import Footer from "../components/Footer";
import { AnimatedTablet } from "../components/AnimatedTablet";

const AutoLink = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={AutoLinkLogo}
            alt=""
            className="h-16 sm:h-20 md:h-24 lg:h-28 pointer-events-none select-none"
          />
          <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-5">
            AutoLink
          </h1>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I built a full-stack geolocation-based platform aimed at optimizing
            the traditional rickshaw stand system in India. The platform bridges
            the information gap between passengers and rickshaw drivers by
            providing real-time visibility into ride availability and demand at
            nearby stands. Using the MERN stack—MongoDB, Express.js, React.js,
            and Node.js—I developed both the frontend and backend from scratch.
            Passengers can check for available rickshaws in real time, while
            drivers receive instant alerts about demand surges in specific
            areas.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            To identify and manage real-time demand and supply zones, I
            implemented the{" "}
            <span className="font-bold">K-Means Clustering algorithm</span>.
            This unsupervised learning technique allowed the system to group
            passengers and rickshaw drivers based on location data, forming
            dynamic hotspots and stand clusters. When passenger clusters began
            to exceed rickshaw availability, the backend logic triggered
            real-time prompts for nearby rickshaws to move towards these
            high-demand areas. Conversely, it also helped redistribute idle
            rickshaws away from oversaturated regions, thereby maintaining a
            balance across the network. This approach minimized wait times and
            improved the overall flow of service within the ecosystem.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Complementing <span className="font-bold">K-Means</span>, I
            integrated{" "}
            <span className="font-bold">H3 Hexagonal Spatial Indexing</span>-a
            geospatial system developed by Uber — to convert raw GPS coordinates
            into hexagonal grid cells. This indexing system made location-based
            queries significantly faster and more accurate by eliminating the
            need for heavy distance calculations. Each rickshaw and passenger
            was mapped to a specific hexagon, and the system could instantly
            detect supply-demand patterns by comparing activity within and
            across neighboring hexagons. H3's hierarchical structure also
            enabled scalable real-time tracking and efficient routing, forming
            the spatial backbone of the platform's decision-making engine.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            The entire system is designed to be scalable, efficient, and
            intuitive, with Google Maps integration on the frontend for seamless
            location visualization. This project showcases my ability to
            independently architect, build, and deploy a complete data-driven
            transportation solution using modern web technologies and geospatial
            intelligence.
          </p>
        </div>

        <div className="flex flex-col mt-20 md:mt-0">
          <AnimatedTablet
            titleComponent={
              <>
                <h1 className="font-inter text-4xl font-semibold text-black">
                  Experience the future of <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Urban Mobility
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
          <div className="w-full border-4 border-gray-200 rounded-lg lg:rounded-3xl overflow-hidden">
            <img
              src={AutoLinkPoster3}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 px-4 sm:px-8 md:px-12 lg:px-20 my-4 sm:my-2 pb-6 sm:pb-10">
          <div className="w-full sm:w-1/2 border-4 border-gray-200 rounded-lg overflow-hidden">
            <img
              src={AutoLinkPoster4}
              alt=""
              className="h-full w-full object-contain pointer-events-none select-none"
            />
          </div>
          <div className="w-full sm:w-1/2 border-4 border-gray-200 rounded-lg overflow-hidden">
            <img
              src={AutoLinkPoster5}
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

export default AutoLink;
