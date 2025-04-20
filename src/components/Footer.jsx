import React, { useState, useEffect, useRef } from "react";
import Github from "../assets/socials/Github.png";
import LinkedIn from "../assets/socials/LinkedIn.png";
import Instagram from "../assets/socials/Instagram.png";
import Music from "../assets/socials/Music.png";
import Resume from "../assets/socials/Resume.png";
import Mail from "../assets/mail.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={footerRef}
      className={`flex flex-col lg:flex-row items-center justify-between bg-[#F2F2F2] px-3 sm:px-5 py-5 mx-2 sm:mx-10 my-5 rounded-3xl gap-8 md:gap-8 ${
        isVisible ? "animate-bounce-in" : ""
      }`}
    >
      <div className="flex items-center gap-2 sm:ml-5">
        <img
          src={Mail}
          alt="Mail"
          className="w-8 sm:w-10 h-8 sm:h-10 pointer-events-none select-none"
        />
        <a
          className="font-inter font-medium text-md sm:text-2xl hover:underline"
          href="mailto:keyurrathod9920@gmail.com"
        >
          keyurrathod9920@gmail.com
        </a>
      </div>
      <div className="flex flex-wrap justify-center md:justify-end items-center gap-3 font-inter font-medium">
        <div className="relative group">
          <a
            href="https://github.com/Keyurrr14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-12 sm:h-16 rotate-6 hover:rotate-12 hover:-translate-y-7 transition-transform duration-300"
              src={Github}
              alt="Github"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
              404Town
            </span>
          </a>
        </div>
        <div className="relative group">
          <a
            href="https://www.linkedin.com/in/keyurrathod/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-12 sm:h-16 rotate-3 hover:rotate-12 hover:-translate-y-7 transition-transform duration-300"
              src={LinkedIn}
              alt="LinkedIn"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
              Nerdville
            </span>
          </a>
        </div>
        <div className="relative group">
          <a
            href="https://instagram.com/keyurrr14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-12 sm:h-16 -rotate-12 hover:-rotate-6 hover:-translate-y-7 transition-transform duration-300"
              src={Instagram}
              alt="Instagram"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
              Hearthub
            </span>
          </a>
        </div>
        <div className="relative group">
          <a
            href="https://music.apple.com/profile/keyurrr14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="h-12 sm:h-16 rotate-3 hover:rotate-12 hover:-translate-y-7 transition-transform duration-300"
              src={Music}
              alt="Apple Music"
            />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
              iGroove
            </span>
          </a>
        </div>
        <div className="relative group">
          <img
            className="h-12 sm:h-16 -rotate-3 hover:rotate-6 hover:-translate-y-7 transition-transform duration-300"
            src={Resume}
            alt="Resume"
          />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm">
            HireFile
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
