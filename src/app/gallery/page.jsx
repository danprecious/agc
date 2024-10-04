"use client";
import { gallery } from "@/utils/constants";
import Image from "next/image";
import { useState } from "react";

const Gallery = () => {
  const [active, setActive] = useState("Electrical Works");

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTypeClick = (e) => {
    let key = e.target.name;
    console.log(typeof key);
    setActive(key);
  };

  return (
    <div className="px-3 lg:px-16">
      <div className="overflow-x-auto w-full flex">
        {Object.keys(gallery).map((key) => {
          return (
            <button
              key={key}
              name={key}
              onClick={handleTypeClick}
              className={`py-2 mr-3 text-xs sm:text-sm  px-2 text-nowrap  flex flex-col items-center  border-secondary ${
                active == key ? " bg-emerald-50 rounded-md" : "text-stone-400"
              }`}
            >
              {key}
            </button>
          );
        })}
      </div>
      {Object.keys(gallery).map((key) => {
        return (
          active === key && (
            <div className="my-8">
              <div className="text-[1.3rem] font-bold py-4 flex justify-center lg:justify-start">
                {key}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {gallery[key].map((image) => {
                  return (
                    <div
                      key={image.id}
                      className={`relative overflow-hidden rounded-lg bg-gray-200 max-h-[13rem] ${
                        image.wide ? "col-span-2" : ""
                      } ${image.tall ? "row-span-2" : ""}`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        height={100}
                        width={100}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default Gallery;
