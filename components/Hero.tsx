import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const words = [
    {
      text: "I'm",
    },
    {
      text: "Sayan",
    },
    {
      text: ",",
    },
    {
      text: "a",
    },
    {
      text: "Web",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="pb-10 pt-36 min-h-screen">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen "
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
      </div>

      {/* grid background */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className=" tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello there!
          </h2>
          <TypewriterEffect className="my-3 text-[40px]" words={words} />
          <p className="text-center my-2 text-[20px]">
            A passionate developer with a knack for problem-solving, I thrive on
            crafting innovative solutions that drive user satisfaction and
            business success.
          </p>
          <a className="" href="#projects">
            <MagicButton
              title="See my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
