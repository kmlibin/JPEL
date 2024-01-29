"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import smallerlogo from "../../public/images/smallerlogo.png";
import paths from "@/app/paths";
import { textFont } from "../app/utils/fonts";

const DropdownMenu = () => {
  return (
    <div className="absolute top-6 mt-2 hidden w-[175px] border border-gray-300 bg-white shadow-lg group-hover:block">
      <ul className="flex flex-col items-end py-2 pr-3 text-right leading-loose">
        <li>
          <Link href={paths.feedingPath()}>Feeding Plan</Link>
        </li>
        <li>
          <Link href={paths.historyPath()}>History of Highland Cattle</Link>
        </li>
        <li>
          <Link href={paths.studiesPath()}>Cattle Studies</Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [hover, setHover] = useState(false);
  const [isCaretRotated, setIsCaretRotated] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
    //thanks chatgpt!
    //timeout to ensure that the hover state is updated before applying the rotate class
    setTimeout(() => {
      setIsCaretRotated(true);
    }, 0);
  };

  const handleMouseLeave = () => {
    setHover(false);
    setIsCaretRotated(false);
  };

  useEffect(() => {
    //check screen size on mount
    const isSmallScreen = window.innerWidth < 768;
    setNav(isSmallScreen);

    //checks screen size more dynamically
    const handleResize = () => {
      const isSmallScreen = window.innerWidth < 768;
      setNav(isSmallScreen);
    };

    window.addEventListener("resize", handleResize);

    //clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`${textFont.className} flex w-full items-center justify-center bg-customLightGreen px-4`}
    >
      <ul className="hidden h-[75px] items-end md:flex">
        <li className="nav-links link-underline cursor-pointer pb-3 font-bold text-customDarkGreen duration-200 hover:scale-105 hover:text-customWhite md:mx-[25px] lg:mx-[40px]">
          <Link href={paths.homePath()} className="text-xl">
            Home
          </Link>
        </li>
        <li className="nav-links link-underline cursor-pointer pb-3 font-bold text-customDarkGreen duration-200 hover:scale-105  hover:text-customWhite md:mx-[25px] lg:mx-[40px]">
          <Link href={paths.farmBeefPath()} className="text-xl">
            Farm Fresh Beef
          </Link>
        </li>

        <div className="relative top-[150%]">
          <Image
            src={smallerlogo}
            height={175}
            width={175}
            alt="JPEL farms"
            className="rounded-full"
          />
        </div>
        <li
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="nav-links group relative cursor-pointer pb-3 font-bold text-customDarkGreen duration-200 group-hover:scale-105 group-hover:text-customWhite md:mx-[25px] lg:mx-[40px]"
        >
          <div className="flex items-center">
            <Link href="#" className="flex items-center text-xl">
              Our Cattle
              <IoIosArrowDown
                size={20}
                className={`ml-2 pt-1 ${
                  isCaretRotated ? "rotate-180" : ""
                } duration-200`}
              />
            </Link>
          </div>
          <DropdownMenu />
        </li>
        <li className="nav-links link-underline cursor-pointer pb-3 font-bold text-customDarkGreen duration-200 hover:scale-105  hover:text-customWhite md:mx-[25px] lg:mx-[40px]">
          <Link href={paths.contactPath()} className="text-xl">
            Contact
          </Link>
        </li>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 mx-auto flex cursor-pointer pt-4 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-black to-gray-800 text-gray-500">
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Home
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Farm Fresh Beef
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Our Cattle
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
