"use client";

import CustomButton from "@/app/components/utilities/button";
import { useState, useRef, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import images from "../../utilities/data/images.json";

const SecondSection = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row">
      <div className="lg:w-[45%] flex flex-col justify-center">
        <p>
          Discover seamless property ownership with our expert guidance. Whether
          you're buying, selling, or investing, we provide tailored solutions to
          meet your needs. From prime locations to smooth transactions, we make
          every step simple and rewarding. Let us help you secure the perfect
          property today.
        </p>
        <div className="my-8 flex justify-center lg:justify-start">
          <CustomButton href="/" text="See properties" />
        </div>
      </div>
      <div className="lg:w-[50%] md:py-14 relative lg:px-10  py-4">
        <div className="flex justify-end border-blue-900">
          <div className="w-full h-[25em] overflow-hidden  border-r-black border-r-[1em] border-solid">
            <Image
              width={1000}
              height={1000}
              alt="home-properties"
              src={images.homeProperties1}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="absolute bottom-10 hidden lg:flex left-[-0.5em] h-[6em] md:h-[10em]  w-[6em] md:w-[14em] rounded-md overflow-hidden">
            <Image
              width={1000}
              height={1000}
              alt="home-properties"
              src={images.homeProperties2}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
