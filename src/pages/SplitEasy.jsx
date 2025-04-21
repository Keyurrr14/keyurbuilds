import React from "react";
import Navbar2 from "../components/Navbar2";
import SplitEasyLogo from "../assets/projects/SplitEasy/SplitEasyLogo.png";
import Footer from "../components/Footer";
import Main from "../assets/projects/SplitEasy/Main.jpg";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";
import { AnimatedTablet } from "../components/AnimatedTablet";

const SplitEasy = () => {
  return (
    <>
      <Navbar2 />
      <div className="mt-24 w-full min-h-screen bg-[#F2F2F2]">
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 md:py-10">
          <img
            src={SplitEasyLogo}
            alt=""
            className="h-14 sm:h-16 md:h-18 lg:h-20 pointer-events-none select-none"
          />
          <h1 className="font-inter font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-5">
            SplitEasy
          </h1>
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full lg:w-4/5">
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            I conceptualized, designed, and developed SplitEasy, a
            cross-platform mobile app built using Flutter to tackle the everyday
            challenge of splitting expenses in group settings. Whether it's a
            dinner outing, a group vacation, or a shared office lunch, managing
            shared expenses often leads to confusion and manual calculation
            errors. SplitEasy was created to make this process effortless,
            accurate, and intuitive through smart automation and a clean,
            user-friendly interface.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            One of the core features of the app is its integration of Optical
            Character Recognition (OCR) technology, which allows users to simply
            click a picture of any physical bill or receipt. The app then
            automatically extracts the text and presents an editable, itemized
            version of the bill on-screen. This eliminates the need for tedious
            manual entry and greatly reduces errors. I integrated and customized
            the OCR pipeline to ensure the accuracy of data recognition across a
            variety of bill formats and fonts.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            Another highlight of the app is the itemized expense splitting
            feature. Users can allocate each individual item to specific
            participants, offering a fair and transparent way to divide costs
            based on what each person actually owes. The UI/UX was designed in
            Flutter with a focus on clarity, ease of use, and
            flexibility—ensuring users could quickly review, edit, and assign
            expenses without friction. The app also supports seamless contact
            integration, allowing users to select people directly from their
            contact list when creating or editing a split, saving time and
            enhancing convenience.
          </p>
          <p className="font-inter font-medium text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10">
            SplitEasy represents a strong example of how I blend functionality,
            thoughtful UI/UX design, and practical problem-solving using
            Flutter. From OCR implementation to real-time contact syncing and a
            dynamic bill-splitting interface, the app was built with scalability
            and user needs in mind. It reflects my ability to handle full-cycle
            app development—from ideation and prototyping to coding, testing,
            and deployment—while also focusing on solving real-world problems in
            an elegant and efficient way.
          </p>
        </div>

        <div className="flex flex-col mt-20 md:mt-0">
          <AnimatedTablet
            titleComponent={
              <>
                <h1 className="font-inter text-4xl font-semibold text-black">
                  Simplify group expenses with <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Smart Splitting
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

export default SplitEasy;
