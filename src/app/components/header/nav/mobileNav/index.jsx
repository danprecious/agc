"use client";

import { GlobalContext } from "@/app/stateManager/context";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Logo from "../../logo";
import { links } from "@/app/utils/constants";
import Link from "next/link";

export const MobileNavComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      {state?.mobileNavOpen ? (
        <div className="fixed top-0 right-0 w-full h-[100vh] flex flex-col justify-center  items-center bg-black/50 z-50">
          <div className="transition-all h-[10%] bg-white rounded-lg w-[90%] mb-5 flex justify-between items-center px-5">
            <Logo />
            <CLoseMobileNav />
          </div>
          <div className="h-[80%] w-[90%] bg-white rounded-lg ">
            <div className="flex flex-col px-3 items-center my-2">
              {links.map((link) => {
                return (
                  <Link key={link.id} className="py-5 my-3 z-50" href={link.href}>
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export const OpenMobileNav = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const openMobileNav = () => {
    dispatch({ type: "OPEN_MOBILE_NAV", payload: true });
  };

  return (
    <button onClick={openMobileNav}>
      <BiMenu className="" />
    </button>
  );
};

export const CLoseMobileNav = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const closeMobileNav = () => {
    dispatch({ type: "ClOSE_MOBILE_NAV", payload: false });
  };

  return (
    <button onClick={closeMobileNav}>
      <FaTimes className="text-sm" />
    </button>
  );
};
