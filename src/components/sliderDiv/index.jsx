"use client";

import React, { useEffect, useState } from "react";

const sliderData = [
  {
    id: "1",
    text: "lorem -Red",
    color: "red",
  },
  {
    id: "2",
    text: "lorem -Blue",
    color: "blue",
  },
  {
    id: "3",
    text: "lorem -Orange",
    color: "amber",
  },
  {
    id: "4",
    text: "lorem -Yellow",
    color: "yellow",
  },
  {
    id: "5",
    text: "lorem -Green",
    color: "green",
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
    }, 2000);
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
        className={`h-full transition-colors w-[4%] rounded-tr-3xl rounded-br-3xl bg-${sliderData[prevSlideIndex].color}-500 justify-self-start text-right`}
      >
        {sliderData[prevSlideIndex]?.text || "Loading"}
      </div>
      <div
        className={`w-[86%]  transition-all bg-${sliderData[activeSlide].color}-500 h-full rounded-3xl text-center py-5 text-[2rem]`}
      >
        {sliderData[activeSlide]?.text || "loading"}
      </div>
      <div
        className={`h-full w-[4%] rounded-tl-3xl rounded-bl-3xl bg-${sliderData[nextSlideIndex].color}-500  self-end text-left`}
      >
        {sliderData[nextSlideIndex]?.text || "Loading"}
      </div>
    </div>
  );
};

export default SliderComponent;
