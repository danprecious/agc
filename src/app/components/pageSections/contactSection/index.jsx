"use client";

import CustomButton from "@/app/components/utilities/button";
import Image from "next/image";
import { useState } from "react";
import images from "../../utilities/data/images.json";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInput = (e) => {
    target = e.target;

    setFormData(() => {
      if (target.name === "name") {
      }
    });
  };

  return (
    <section className="lg:flex justify-between">
      <div className="lg:w-[55%] md:py-14 relative lg:px-10 px-4 py-4">
        <div className="flex justify-end ">
          <div className="md:w-[80%] w-[100%] h-[20em] md:mr-6 mx-2 overflow-hidden rounded-lg  ">
            <Image
              width={1000}
              height={1000}
              alt="hero-image"
              src={images.contactSection1}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          {/* <div className="absolute hidden lg:flex top-0 left-10 h-[4em] md:h-[10em] w-[4em] md:w-[12em] rounded-lg overflow-hidden">
            <Image
              width={1000}
              height={1000}
              alt="hero-image"
              src={images.contactSection3}
              className="object-cover w-full h-full"
            />
          </div> */}
          {/* <div className="absolute bottom-0 md:left-28 left-20 h-[4em] md:h-[7em] w-[4em] md:w-[7em] rounded-lg">
            <Image
              width={1000}
              height={1000}
              alt="hero-image"
              src={images.contactSection3}
              className="object-cover w-full h-full"
            />
          </div> */}
          {/* <div className="absolute bottom-10 h-[6em] md:h-[10em] w-[6em] md:w-[10em] rounded-lg ">
            <Image
              width={1000}
              height={1000}
              alt="hero-image"
              src={images.contactSection4}
              className="object-cover w-full h-full"
            />
          </div> */}
          <div className=""></div>
          <div></div>
        </div>
      </div>
      <div className="lg:w-[40%] flex flex-col justify-center px-2 md:px-6 my-10 lg:my-0">
        <form
          onSubmit={""}
          className="w-100 flex flex-col py-10 px-5 shadow-lg"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleInput}
            className="p-3 rounded-md my-3 text-sm border-[1px] border-blue-700 border-opacity-20"
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Type in your message here"
            onChange={handleInput}
            className="resize-none h-[5em] p-3 rounded-md my-3 text-sm border-[1px] border-blue-700 border-opacity-20"
          />
          <div className="flex justify-end">
            <CustomButton href="/" text="Send" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
