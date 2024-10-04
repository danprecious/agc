import React from "react";
import localFont from "next/font/local";
import CustomButton from "../utilities/button";

const heroFont = localFont({
  // recoleta-regulardemo.otf
  // octoberdreams.otf
  // SinosansRegular-aYxZ5.otf
  // WsParadoseRegular-1jPAe.ttf
  // ModernAesthetic-DemoVersion-Regular.otf
  // CodeNext-Trial-ExtraBold.ttf
  src: "../../../public/fonts/CodeNext-Trial-ExtraBold.ttf",
  variable: "--font-heroFont",
});

const Hero = () => {
  return (
    <div className={`${heroFont.variable} lg:px-16 px-3`}>
      <div className="lg:flex justify-around">
        <div className="lg:w-[55%] lg:mx-5  flex flex-col justify-center lg:items- my-8">
          <h1 className="lg:text-left text-center font-heroFont lg:text-[3rem] xs:text-[1.5rem] text-[2rem] sm:text-[3rem] text-wrap hero-text py-4">
            Creating Value, One Project at a Time
          </h1>
          <p className="lg:text-left text-center lg:w-[55% lg:my-3">
            From property deals to cutting-edge construction and electrical
            services <br /> — your vision, our expertise
          </p>
          <div className="flex flex-col md:flex-row lg:justify-start justify-center  items-center md:items-center my-5">
            
              <CustomButton href="/" text="Discover more" />
            
          </div>
        </div>
        <div className="lg:h-[30em] h-[30em] w-full lg:w-[45%] lg:mx-5 bg-emerald-600 rounded-md"></div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default Hero;
