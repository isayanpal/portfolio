import React from "react";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import { IoIosMail } from "react-icons/io";
import Image from "next/image";

const Connect = () => {
  return (
    <footer className="w-full pb-10" id="connect">
      <div className="flex flex-col items-center">
        <h1 className="heading text-[45px] lg:max-w-[45vw]">
          And <span className="text-purple">That's</span> all!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Eager to collaborate and create impactful digital experiences? Reach
          out, and let's turn ideas into reality!
        </p>
        <a href="mailto:sayanpalb@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<IoIosMail />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image
                src={info.img}
                alt="Social Media Icon"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Connect;
