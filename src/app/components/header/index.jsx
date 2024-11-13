import CustomButton from "../utilities/button";
import { FaDownload, FaBlenderPhone } from "react-icons/fa";
import { BiMenu, BiCollection, BiSolidContact } from "react-icons/bi";
import Logo from "./logo";

import NavBar from "./nav";
import { MobileNavComponent, OpenMobileNav } from "./nav/mobileNav";

const Header = () => {
  return (
    <header className="w-[100%] py-8 items-center justify-between md:px-12 lg:px-20 px-4 flex relative">
      <Logo />
      <div className="flex lg:w-[50%] xl:w-[30%] md:w-[50%] justify-center items-center">
        <NavBar />
      </div>
      {/* <div className="hidden md:flex">
        
      </div> */}
      <div className="md:hidden ">
        <MobileNavComponent />
        <OpenMobileNav />
      </div>
    </header>
  );
};

export default Header;
