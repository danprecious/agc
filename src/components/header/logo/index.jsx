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


const Logo = () => {
  return (
    <div className={`${heroFont.variable}`}>
      <div className=' text-emerald-800 font-black font-heroFont'>AGC</div>
    </div>
  )
}

export default Logo