import localFont from "next/font/local";
import SliderComponent from "../sliderDiv";

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


const PageLayout = ({children, title}) => {
  return (
    <section className={`${heroFont.variable}`}>
        {/* <div className='h-[15em] bg-emerald-700 relative p-5 text-white flex items-end justify-center'>
            <h3 className='font-heroFont md:absolute bottom-5 left-10   lg:text-[2rem] text-[1.2rem]'>{title}</h3>
        </div> */}


        <SliderComponent />
        {children}
    </section>
  )
}

export default PageLayout