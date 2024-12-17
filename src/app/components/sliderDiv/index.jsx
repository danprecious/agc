"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import images from "../utilities/data/images.json";

const sliderData = [
  {
    id: "1",
    text: "Illuminate Your Space with Expert Electrical Installations",
    color: "red",
    bg: images.servicesPage1,
  },
  {
    id: "2",
    text: "Maximize Your Business Potential with Tailored Consulting",
    color: "blue",
    bg: images.servicesPage2,
  },
  {
    id: "3",
    text: "Building Your Dream Home, Step by Step",
    color: "amber",
    bg: images.servicesPage3,
  },
  {
    id: "4",
    text: "Reduce Costs & Embrace Sustainability",
    color: "yellow",
    bg: images.servicesPage4,
  },
  {
    id: "5",
    text: "Keep Your Electrical Systems Running Smoothly",
    color: "green",
    bg: images.servicesPage5,
  },
];

const SliderComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const prevSlideIndex =
    (activeSlide - 1 + sliderData.length) % sliderData.length;
  const nextSlideIndex = (activeSlide + 1) % sliderData.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-[20em] flex justify-between">
      <div className="hidden">
        <div className="bg-amber-500"></div>
        <div className="bg-blue-500"></div>
        <div className="bg-red-500"></div>
        <div className="bg-yellow-500"></div>
        <div className="bg-green-500"></div>
        <div className="bg-amber-500"></div>
      </div>

      <div
        className={`h-full transition-all duration-1000 w-[4%] rounded-tr-3xl overflow-hidden border-[5px] border-r-black border-solid rounded-br-3xl bg-${sliderData[prevSlideIndex].color}-500 justify-self-start text-right`}
      >
        {/* {sliderData[prevSlideIndex]?.text || "Loading"} */}
        <Image
          width={1000}
          height={1000}
          alt="Services & Partnerships"
          src={sliderData[prevSlideIndex]?.bg}
          className="object-cover w-full h-full grayscale"
        />
      </div>
      <div
        className={`w-[86%] relative after:content-["${sliderData[activeSlide]?.text}"]  after:absolute after:z-50 transition-all overflow-hidden bg-${sliderData[activeSlide].color}-500 h-full rounded-3xl text-center  text-[2rem]`}
      >
        <div className="bg-black absolute w-full h-full z-40 opacity-70"></div>
        <Image
          width={1000}
          height={1000}
          alt="home-properties"
          src={sliderData[activeSlide]?.bg}
          className={`object-cover relative w-full h-full animate-in transition-all duration-1000 backdrop-blur-lg after:content-["${sliderData[activeSlide]?.text}"] after:absolute `}
        />
        <p className="absolute top-[40%] left-[10%]  right-[10%] z-50">
          <span className="relative font-extrabold text-[2.5rem] text-white">{sliderData[activeSlide]?.text || "loading"}</span>
        </p>
      </div>
      <div
        className={`h-full w-[4%] overflow-hidden border-[5px] border-l-black border-solid rounded-tl-3xl rounded-bl-3xl bg-${sliderData[nextSlideIndex].color}-500  self-end text-left`}
      >
        <Image
          width={1000}
          height={1000}
          alt="home-properties"
          src={sliderData[nextSlideIndex]?.bg}
          className="object-cover w-full h-full animate-in"
        />
        
      </div>
    </div>
  );
};

export default SliderComponent;
