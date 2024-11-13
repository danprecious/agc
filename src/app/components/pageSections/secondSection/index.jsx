"use client";

import CustomButton from "@/app/components/utilities/button";
import { useState, useRef, useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

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
      <div className="lg:w-[50%] md:py-14 relative lg:px-10 px-4 py-4">
        <div className="flex justify-end border-blue-900">
          <div className="w-full h-[25em] bg-emerald-400  "></div>
          <div className="absolute bottom-10 left-[-0.5em] h-[6em] md:h-[10em] w-[6em] md:w-[10em] bg-emerald-900 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
