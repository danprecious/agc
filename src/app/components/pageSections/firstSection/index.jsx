import CustomButton from "@/app/components/utilities/button";
import React from "react";
import {
  FaBuilding,
  FaHome,
  FaRegBuilding,
  FaScrewdriver,
  FaTools,
} from "react-icons/fa";

const FirstSection = () => {
  const listData = [
    {
      id: "1",
      icon: <FaScrewdriver />,
      listTitle: "Electrical Works",
      listText:
        "Power up your projects with our expert electrical services. From installations to maintenance, we ensure safety and efficiency every step of the way.",
    },
  
    {
      id: "2",
      icon: <FaHome />,
      listTitle: "Building and Construction",
      listText:
        "Bringing your vision to life with cutting-edge construction solutions. From residential builds to commercial projects, we construct spaces that stand the test of time.",
    },
    
    {
      id: "3",
      icon: <FaRegBuilding />,
      listTitle: "Property Deals",
      listText:
        "Find your dream property or secure a great investment with our seamless property buying, selling, and leasing services. Your next great opportunity starts here.",
    },
  ];
  

  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[50%]">
        <div className="md:w-[90%] w-full md:h-full h-[20em] bg-emerald-900"></div>
      </div>
      <div className="lg:w-[50%] ">
        <ul>
          {listData.map((data, index) => {
            return (
              <li key={data.id} className="my-5">
                <p className="py-2 font-semibold text-[1.1rem] flex items-center">
                  <span className="mr-3 text-[1.7rem]">{data.icon}</span>
                  {data.listTitle}
                </p>
                <p className="md:mx-8 text-sm py-5">{data.listText}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FirstSection;


