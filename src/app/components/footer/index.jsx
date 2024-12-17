import React from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { RiUserLocationFill } from "react-icons/ri";
import { FaLocationArrow, FaSearchLocation } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" w-full bg-black text-white min-h-[20em] px-4 lg:p-10 py-12 lg:flex justify-between">
      <div className="lg:w-[30%] mb-20">
        <p className="text-[2rem]  font-bold ">
          AGC, your one stop plug for everything - electrical, construction &
          property purchase
        </p>
      </div>
      <div className="lg:flex w-[60%] justify-around">
        <div className="mb-12">
          <p className="font-semibold">Quick links</p>
          <ul>
            <li className="my-3">
              <Link className="text-stone-600  mx-2" href="/home">Home</Link>
            </li>
            <li className="my-3">
              <Link className="text-stone-600  mx-2" href="/about">About</Link>
            </li>
            <li className="my-3">
              <Link className="text-stone-600  mx-2" href="/services">Services</Link>
            </li>
            <li className="my-3">
              <Link className="text-stone-600  mx-2" href="/gallery">Gallery</Link>
            </li>
            <li className="my-3">
              <Link className="text-stone-600  mx-2" href="/partnerships">Partnerships</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <p className="font-semibold">Address</p>

          <p className="my-3 text-stone-600">Warri, Delta State, Nigeria</p>
        </div>
        <div className=""></div>
      </div>
    </footer>
  );
};

export default Footer;
