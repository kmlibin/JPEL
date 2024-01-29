"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import smallerlogo from "../../public/images/smallerlogo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
    <nav className="nav flex w-full items-center justify-center bg-blue-400 px-4 text-white">
      <ul className="hidden h-[75px] items-end md:flex">
        <li className="nav-links link-underline cursor-pointer px-4 pb-3 font-medium text-gray-500 duration-200 hover:scale-105 hover:text-white">
          <Link href="#" className="text-xl">Link 1</Link>
        </li>
        <li className="nav-links link-underline cursor-pointer px-4 pb-3 font-medium  text-gray-500 duration-200 hover:scale-105 hover:text-white">
          <Link href="#" className="text-xl">Link 1</Link>
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
        <li className="nav-links link-underline cursor-pointer px-4 pb-3 font-medium  text-gray-500 duration-200 hover:scale-105 hover:text-white">
          <Link href="#" className="text-xl">Link 1</Link>
        </li>
        <li className="nav-links link-underline cursor-pointer px-4 pb-3 font-medium  text-gray-500 duration-200 hover:scale-105 hover:text-white">
          <Link href="#" className="text-xl">Link 1</Link>
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
              Link 1
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Link 2
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Link 3
            </Link>
          </li>
          <li className="cursor-pointer px-4 py-6 text-4xl capitalize">
            <Link onClick={() => setNav(!nav)} href="#">
              Link 4
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
