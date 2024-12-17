"use client";

import { useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const reviewsData = [
  {
    id: "1",
    name: "Jackson",
    image: "",
    reviewMessage:
      "AGC came into my apartmemnt and transformed the way things looked. Really cuting edge services they offer.",
  },
  {
    id: "2",
    name: "Samson D.",
    image: "",
    reviewMessage:
      "They are simply phenomenal. Working with them was truly a great experience. Defintely using AGC for all my engineering works",
  },
];
const FifthSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <section className="flex justify-center flex-col items-center relative mb-15">
      {reviewsData.map(({ reviewMessage, name, image }, index) => {
        return (
          <div
            key={index}
            className={`${
              index == currentIndex ? "hidden" : "flex"
            } flex-col md:w-[60%] `}
          >
            <p className="text-center py-5 text-[1.2rem]">"{reviewMessage}"</p>
            <div className="flex justify-center py-10 items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-stone-700 mx-2"></div>
              <div>
                <p>{name}</p>
              </div>
            </div>
          </div>
        );
      })}
      <div className="mt-6 flex">
        <button onClick={handlePrev} className="">
          <BiLeftArrowCircle className="text-[2rem] mx-5" />
        </button>
        <button onClick={handlePrev} className="">
          <FaArrowCircleRight className="text-[2rem] mx-5" />
        </button>
      </div>
    </section>
  );
};

export default FifthSection;
