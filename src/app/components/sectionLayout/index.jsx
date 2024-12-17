import React from "react";
import localFont from "next/font/local";

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

const SectionLayout = ({ children, text }) => {
  return (
    <section
      className={`${heroFont.variable} lg:px-20 md:px-12 px-6 py-6 lg:py-10 lg:my-20 my-10`}
    >
      <div className="flex justify-center">
        <h1 className="font-heroFont lg:text-[2.8rem] text-[2rem] font-semibold text-center lg:w-[80%] py-6 mb-8">
          {text}
        </h1>
        
      </div>
      {children}
    </section>
  );
};

export default SectionLayout;
