'use client'
import { Slide } from "react-awesome-reveal"
import shanerounce from '../../../public/images/shanerounce.jpg'
import Image from "next/image"
import Slider from "./Slider"
import { textFont, titleFont } from "@/app/utils/fonts"

export default function FactsCard() {
    return (
        <div className=" xlscreen relative flex w-full items-center justify-center lg:h-[110vh]">
         <Slide direction="right" triggerOnce className="absolute right-[2%] top-[-1rem] z-20"> <div
          className={`${titleFont.className} shadow-element flex-col items-center bg-customDarkGreen  p-9 text-5xl text-customWhite`}
        >
        
          <h2 className={`${titleFont.className} `}>The Highland Cow</h2>
          <h5
            className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
          >
            Shaggy and Adorable
          </h5>
          
        </div></Slide>
        <div className="relative flex h-full w-full items-center justify-end rounded bg-customLightGreen bg-opacity-60">
          <Slider />
          <div className="flex h-full justify-end rounded-[50%] lg:w-[85%]">
            <Image
              src={shanerounce}
              className="h-[100%] "
              style={{ objectFit: "cover" }}
              alt="our ranch"
            />
          </div>
        </div>
      </div>
    )
}