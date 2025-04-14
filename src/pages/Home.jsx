import React from "react";
import Navbar from "../components/Navbar";
import AnimateBlob from "../components/AnimateBlob";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import KshitijBlack from "../assets/projects/Kshitij/KshitijBlack.png";
import KshitijTextBlack from "../assets/projects/Kshitij/KshitijTextBlack.png";
import KshitijPoster from "../assets/projects/Kshitij/KshitijPoster.png";
import KshitijPoster2 from "../assets/projects/Kshitij/KshitijPoster2.png";
import MCCLogo from "../assets/projects/MCC/MCCLogo.png";
import MCCText from "../assets/projects/MCC/MCCText.png";
import MCCPoster from "../assets/projects/MCC/MCCPoster.png";
import MCCPoster2 from "../assets/projects/MCC/MCCPoster2.png";
import TEDxLogo from "../assets/projects/TedxMithibaiCollege/TEDxLogo.png";
import TEDxPoster from "../assets/projects/TedxMithibaiCollege/TEDxPoster.png";
import TEDxPoster2 from "../assets/projects/TedxMithibaiCollege/TEDxPoster2.png";
import AutoLinkLogo from "../assets/projects/AutoLink/AutoLinkLogo.png";
import AutoLinkPoster from "../assets/projects/AutoLink/AutoLinkPoster.png";
import AutoLinkPoster2 from "../assets/projects/AutoLink/AutoLinkPoster2.png";
import SplitEasyLogo from "../assets/projects/SplitEasy/SplitEasyLogo.png";
import SplitEasyPoster from "../assets/projects/SplitEasy/SplitEasyPoster.png";
import SplitEasyPoster2 from "../assets/projects/SplitEasy/SplitEasyPoster2.png";
import SquareFootLogo from "../assets/projects/SquareFoot/SquareFootLogo.png";
import SquareFootPoster from "../assets/projects/SquareFoot/SquareFootPoster.png";
import SquareFootPoster2 from "../assets/projects/SquareFoot/SquareFootPoster2.png";
import MoronMediaPoster from "../assets/projects/MoronMedia/MoronMediaPoster.png";
import MoronMediaPoster2 from "../assets/projects/MoronMedia/MoronMediaPoster2.png";
import AboutMe from "../assets/AboutMe.mp4";
import "../pages/connect.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <AnimateBlob />
      <div
        id="hey"
        className="md:w-2/3 lg:w-1/2 mx-4 md:mx-10 mt-28 md:mt-36 lg:mt-56"
      >
        <h1 className="font-inter font-medium text-lg md:text-2xl lg:text-4xl text-zinc-500">
          Howdy! Meet your trusted design partner, <br /> bringing fresh ideas
          to life in tech, product, and beyond.
        </h1>
      </div>
      <h1 className="font-inter font-medium text-7xl sm:text-9xl md:text-[15vw] lg:text-[15vw] mx-4 md:mx-7 mt-5">
        Keyur Rathod
      </h1>
      <div className="-mt-20 md:-mt-8 lg:mt-0 mx-5">
        <svg
          width="1330"
          height="245"
          viewBox="0 0 1330 245"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M1 51.417C177.115 22.8131 225.474 34.3896 197 117.917C362.844 42.3989 438.991 66.192 452.5 242.917C542.565 24.6433 629.412 16.6745 833.5 155.917C729.807 -24.4558 909.711 -16.4603 1329 42.917"
            stroke="black"
            strokeWidth="10"
            className="animate-[draw_2.5s_ease-in-out_forwards]"
            style={{
              strokeDasharray: 2000,
              strokeDashoffset: 2000,
            }}
          />
          <path
            d="M416.5 233.998C419.639 208.867 415.69 194.504 392.5 167.998M920.5 49.4985C1049.24 30.7553 1137.62 41.0954 1323.5 94.4985"
            stroke="black"
            strokeWidth="10"
            className="animate-[draw_2.5s_ease-in-out_1s_forwards]"
            style={{
              strokeDasharray: 1000,
              strokeDashoffset: 1000,
            }}
          />
        </svg>
      </div>

      <h1
        id="story"
        className="w-full md:w-2/3 font-inter font-medium text-3xl sm:text-5xl md:text-7xl mx-4 sm:mx-6 md:mx-10 mt-20 sm:mt-32 md:mt-52"
      >
        Crafting the web, chasing sunsets, and scoring goals.
      </h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mx-4 sm:mx-6 md:mx-10 mt-6 sm:mt-8 md:mt-10">
        <div className="lg:w-2/5 lg:h-screen bg-[#F2F2F2] text-zinc-500 rounded-3xl flex items-end order-2 lg:order-1">
          <p className="font-inter font-medium text-base sm:text-xl md:text-sm lg:text-lg text-justify px-4 sm:px-5 md:px-7 py-6 sm:py-8 md:py-10">
            I'm a software developer, web designer, and web developer based in
            Mumbai. A recent graduate from Mithibai College, I have been
            freelancing in the tech industry for about a year. With a strong
            foundation in web development and design, I am passionate about
            creating user-friendly digital experiences that simplify complex
            ideas. <br /> <br />
            My fascination with technology began in childhood, inspired by
            simple computer features like copy, paste, and undo, which felt like
            superpowers. This early curiosity evolved into a deep passion for
            coding and design. Outside of work, I enjoy playing football, going
            for runs, and traveling to new places.
          </p>
        </div>
        <div className="lg:w-3/5 h-screen bg-[#F2F2F2] rounded-3xl order-1 lg:order-2">
          {/* <video
            src={AboutMe}
            autoPlay
            muted
            loop
            controls={false}
            playsInline
            className="w-full h-full object-cover rounded-3xl"
          ></video> */}
        </div>
      </div>

      <div
        id="work"
        className="md:mt-48 mt-20 w-full sm:w-3/4 md:w-full flex flex-col items-center justify-center mx-auto px-4"
      >
        <h1 className="font-caveat text-2xl sm:text-4xl md:text-5xl text-zinc-500 font-bold text-center sm:ml-0 md:ml-96">
          from 2022 'til today'
        </h1>
        <h1 className="font-inter font-medium text-4xl sm:text-6xl md:text-8xl text-center mt-2">
          My latest work
        </h1>
      </div>

      <ProjectCard
        logo={KshitijBlack}
        logoText={KshitijTextBlack}
        description="Kshitij, Mithibai College's annual cultural festival, is one of Asia's biggest, featuring 45+ events, 700+ committee members, and over 50,000 attendees. With Para Events, celebrity performances, and grand prizes, the 17th edition promises an unforgettable celebration."
        poster1={KshitijPoster}
        poster2={KshitijPoster2}
        route="/kshitij"
      />
      <ProjectCard
        logo={TEDxLogo}
        logoText="TEDxMithibaiCollege"
        description="Designed and Developed the official website for TEDxMithibaiCollege — an independently organized TED event where TED Talks videos and live speakers come together to spark deep discussions and meaningful connections. Guided by the spirit of TED's global mission to spread ideas, our self-organized event creates a TED-like experience at a local level."
        poster1={TEDxPoster}
        poster2={TEDxPoster2}
        route="/tedx"
      />
      <ProjectCard
        logo={AutoLinkLogo}
        logoText="AutoLink"
        description="This project uses H3 geospatial tech to connect passengers and rickshaw drivers in real time, improving visibility, efficiency, and communication at rickshaw stands."
        poster1={AutoLinkPoster}
        poster2={AutoLinkPoster2}
        route="/autolink"
      />
      <ProjectCard
        logoText="MoronMedia"
        description="Moron Media is a leading creative agency specializing in video production, campaign ideation, and post-production for global brands and events. From iconic concert tours and fashion films to viral music videos and large-scale expos, they deliver bold, impactful content that pushes creative boundaries."
        poster1={MoronMediaPoster}
        poster2={MoronMediaPoster2}
        route="/moronmedia"
      />
      <ProjectCard
        logo={SquareFootLogo}
        logoText="squarefoot.studio"
        description="Squarefoot Studio is a Mumbai-based architecture and interior design firm specializing in design and turnkey projects. With a passionate and experienced team, they've transformed residential, commercial, and hospitality spaces into timeless masterpieces."
        poster1={SquareFootPoster}
        poster2={SquareFootPoster2}
        route="/squarefoot"
      />
      <ProjectCard
        logo={SplitEasyLogo}
        logoText="SplitEasy"
        description="SplitEasy is a smart mobile app that simplifies group expense splitting using advanced OCR technology, allowing users to snap photos of bills for automatic text extraction. It offers itemized expense allocation and seamless contact integration for quick, accurate, and hassle-free cost sharing."
        poster1={SplitEasyPoster}
        poster2={SplitEasyPoster2}
        route="/spliteasy"
      />
      <ProjectCard
        logo={MCCLogo}
        logoText={MCCText}
        description="The Mithibai Cultural Committee is the heart of all things fun and fabulous at Mithibai, repping the college at fests like Mood Indigo and Umang, while also throwing epic in-house events like Kshitij. With a streak of big wins and loads of talent, it's basically the cool squad that puts Mithibai on the cultural map!"
        poster1={MCCPoster}
        poster2={MCCPoster2}
        route="/mcc"
      />

      <h1 className="w-2/3 lg:w-1/3 mx-auto font-caveat text-zinc-400 font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mt-20 -rotate-6">
        Tap this 'tiny' button to listen today's jam =)
      </h1>
      <div className="flex items-center justify-center pt-10 pb-16">
          <iframe
            style={{ borderRadius: "12px" }}
            className="px-10 md:px-36"
            src="https://embed.music.apple.com/in/album/ho-hey/1754219081?i=1754219314"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      {/* <div className="flex justify-center mt-28 mb-32">
        <button type="button" className="button">
          <div className="button-top">Connect</div>
          <div className="button-bottom"></div>
          <div className="button-base"></div>
        </button>
      </div> */}
      <Footer />
    </>
  );
};

export default Home;
