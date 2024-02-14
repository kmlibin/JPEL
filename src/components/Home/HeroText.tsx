'use client'
import React from 'react'
import { titleFont, textFont } from '@/app/utils/fonts';
import Link from 'next/link';
import paths from '@/app/paths';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import {Slide, Zoom} from 'react-awesome-reveal';
const HeroText = () => {
  return (
    <div className="absolute bottom-[18%] right-[5%] flex flex-col items-center text-center">
    <Slide direction="right" duration={1500} triggerOnce delay={300}>
      <h1 className={`${titleFont.className} text-6xl text-customWhite`}>
        Quality Mountain-Raised Beef
      </h1>
    </Slide>
    <Slide direction="left" duration = {1500} triggerOnce delay={300}>
    <h3 className={`${titleFont.className} mb-7 text-4xl text-customWhite`}>
      Naturally Organic, Uniquely Flavorful
    </h3>
    </Slide>
    <Zoom duration={1500} triggerOnce delay={300}>
    <Link
      className={`${textFont.className} shadow-outline flex items-center rounded bg-customBeige p-4 underline duration-300 hover:scale-105 hover:bg-customMediumGreen hover:text-customWhite active:scale-90`}
      href={paths.farmBeefPath()}
    >
      <p className="font-bold tracking-wider">Read More</p>{" "}
      <FaArrowAltCircleRight className="ml-2" />
    </Link>
    </Zoom>
  </div>
  )
}

export default HeroText