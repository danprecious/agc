"use client";

import { GlobalContext } from "@/stateManager/context";
import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";

export const MobileNavComponent = () => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <>
      {state?.mobileNavOpen ? (
        <div className="fixed top-0 right-0 w-full h-[100vh] flex justify-end bg-black z-50">
          <div className="w-[70%] transition-all bg-white h-full">
            <div className="flex justify-end">
              <CLoseMobileNav />
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
      <BiMenu />
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
      <FaTimes className="bg-black text-white text-[2rem]" />
    </button>
  );
};
