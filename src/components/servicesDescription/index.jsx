"use client";

import { partnerships } from "@/utils/constants";
import { useState } from "react";

const ServiceDescription = ({ data, activeDescription }) => {
  const [active, setActive] = useState(activeDescription);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleTypeClick = (e) => {
    let key = e.target.name;
    console.log(typeof key);
    setActive(key);
  };
  return (
    <div className="lg:w-[86%]">
      <div className="overflow-x-auto w-full flex">
        {Object.keys(data).map((key) => {
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

      {Object.keys(data).map((key) => {
        return (
          active === key && (
            <div key={key} className="my-4 ">
              {data[key].map((partnership, index) => {
                return (
                  <div className="my-5 px-2">
                    <h3 className="py-2 font-bold text-[1.2rem]">
                      {partnership.title}
                    </h3>
                    <p className="py-5">{partnership.description}</p>
                  </div>
                );
              })}
            </div>
          )
        );
      })}
    </div>
  );
};

export default ServiceDescription;
