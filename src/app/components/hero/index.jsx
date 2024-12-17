import React from "react";
import localFont from "next/font/local";
import CustomButton from "../utilities/button";
import Image from "next/image";

const heroFont = localFont({
  // recoleta-regulardemo.otf
  // octoberdreams.otf
  // SinosansRegular-aYxZ5.otf
  // WsParadoseRegular-1jPAe.ttf
  // ModernAesthetic-DemoVersion-Regular.otf
  // CodeNext-Trial-ExtraBold.ttf
  src: "../../../../public/fonts/CodeNext-Trial-ExtraBold.ttf",
  variable: "--font-heroFont",
});

const Hero = () => {
  return (
    <div className={`${heroFont.variable} lg:px-20 px-3 lg:py-8`}>
      <div className="lg:flex justify-around">
        <div className="lg:w-[55%] lg:mx-5  flex flex-col justify-center lg:items- my-8">
          <h1 className="lg:text-left text-center font-heroFont lg:text-[3.5rem] xs:text-[1.5rem] text-[2rem] sm:text-[3rem] text-wrap hero-text py-4">
            Creating <span className="text-amber-900">Value,</span> One{" "}
            <span className="text-amber-900">Project</span> at a Time
          </h1>
          <p className="lg:text-left text-center lg:w-[55% lg:my-3 pb-8 lg:pb-0">
            From property deals to cutting-edge construction and electrical
            services <br /> — your vision, our expertise
          </p>
          <div className="flex flex-col md:flex-row lg:justify-start animate-bounce hover:animate-none justify-center  items-center md:items-center my-5">
            <CustomButton href="/" text="Start a Project" className="animate-pulse"/>
          </div>
        </div>
        <div className="lg:h-[35em] h-[30em] w-full lg:w-[48%]  rounded-md overflow-hidden bg-blend-color-dodge">
          <Image
            width={1000}
            height={1000}
            alt="hero-image"
            src="/hero5.jfif"
            className="object-cover w-full h-full bg-blend-hard-light grayscale"
          />
        </div>
      </div>

  
    </div>
  );
};

export default Hero;
