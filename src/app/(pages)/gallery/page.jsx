"use client";
import SectionLayout from "@/app/components/sectionLayout";
import { gallery } from "./galleryData";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ContactSection from "@/app/components/pageSections/contactSection";

const Gallery = () => {
  const [active, setActive] = useState("Electrical works");

  const [isLoading, setIsLoading] = useState(true);
  const [galleryData, setGalleryData] = useState({
    "Electrical works": [],
    "Building and construction": [],
    "Property sales": [],
    Souvenirs: [],
  });

  useEffect(() => {
    const fetchGalleryImages = async () => {
      const response = await axios.get("/api/getContents", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      let contents = response.data;
      console.log(contents);

      const tempGalleryData = {
        "Electrical works": [],
        "Building and construction": [],
        "Property sales": [],
        Souvenirs: [],
      };

      for (const content of contents) {
        switch (content.type) {
          case "Electrical works":
            tempGalleryData["Electrical works"].push(content);
            break;
          case "Building and construction":
            tempGalleryData["Building and construction"].push(content);
            break;
          case "Souvenirs":
            tempGalleryData["Souvenirs"].push(content);
            break;
          case "Property":
            tempGalleryData["Property sales"].push(content);
            break;
          default:
            break;
        }
      }

      console.log(tempGalleryData);

      setGalleryData(tempGalleryData);
      console.log(galleryData);
      setIsLoading(false);
    };
    fetchGalleryImages();
  }, []);

  const handleTypeClick = (e) => {
    let key = e.target.name;
    console.log(typeof key);
    setActive(key);
  };

  return (
    <div className="px-3 lg:px-16">
      <div className="lg:w-[70%]">
        <h1 className="font-black lg:text-[4rem] text-[2rem] ">
          A show of <span className="text-amber-900">our works</span> and{" "}
          <span className="text-amber-900">property</span> you can buy...
        </h1>
      </div>

      <div className="w-full">
        {isLoading ? (
          <p className="py-32 w-full text-center">Loading gallery data...</p>
        ) : (
          <div className="w-full">
            <div className="overflow-x-auto w-full flex my-5">
              {Object.keys(galleryData).map((key) => {
                return (
                  <button
                    key={key}
                    name={key}
                    onClick={handleTypeClick}
                    className={`py-2 mr-3 text-xs sm:text-sm  px-4 text-nowrap  flex flex-col items-center  border-secondary ${
                      active == key
                        ? " bg-amber-600 rounded-md text-whit"
                        : "text-stone-400"
                    }`}
                  >
                    {key}
                  </button>
                );
              })}
            </div>
            {Object.keys(galleryData).map((key, index) => {
              return (
                active === key && (
                  <div key={index} className="my-5">
                    <div className="text-[1.3rem] font-bold py-4 flex justify-center lg:justify-start">
                      {key}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                      {galleryData[key].map((image) => {
                        return (
                          <div
                            key={image.id}
                            className={`relative overflow-hidden rounded-lg bg-gray-200 max-h-[13rem] ${
                              image.wide ? "col-span-2" : ""
                            } ${image.tall ? "row-span-2" : ""}`}
                          >
                            <Image
                              src={image.fileUrl}
                              alt={`Image for ${image.title}`}
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
        )}
      </div>
      <SectionLayout text="Do Business With Us Today">
          <ContactSection />
        </SectionLayout>
    </div>
  );
};

export default Gallery;
