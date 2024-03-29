"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { titleFont, textFont } from "@/app/utils/fonts";
import Header from "../GreenHeader";
import { Fade, Slide } from "react-awesome-reveal";

interface HomeCardProps {
  imgSrc: any;
  path: string;
  content: any;
  header: string;
  subheader: string;
  left: string;
  top: string;
  ml: string;
  translatex: string;
  transform: string;
}
export default function HomeCard({
  imgSrc,
  path,
  content,
  header,
  subheader,
  left,
  top,
  ml,
  translatex,
  transform,
}: HomeCardProps) {
  return (
    <div className="relative flex w-full items-center justify-center bg-customBeige bg-opacity-10">
      <div className=" absolute my-auto h-[83%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
      
        <Header
          header={header}
          subheader={subheader}
          ml={ml}
          left={left}
          top={top}
          translatex={translatex}
          transform={transform}
          direction="left"
        />
   
      <Fade duration={1500} className="flex items-center justify-center">
        <div className=" shadow-element-grey my-[10rem] flex h-[100%] w-[90%] items-center justify-center rounded border-2 border-customBrown border-opacity-5 bg-customBrown bg-opacity-30 p-2">
          <div className=" shadow-element flex h-[97%] w-[100%] items-center justify-between rounded  bg-customLightGreen bg-opacity-60 p-4">
            <div className="flex w-1/3 flex-col items-center justify-center  py-3">
              <Image
                src={imgSrc}
                height={350}
                width={350}
                placeholder="blur"
                alt="our ranch"
                className="shadow-element border-4 border-customMediumGreen"
              />
              {/* <h4 className={`${titleFont.className} text-lg my-4`}>John & Peggy</h4> */}
            </div>
            <div className=" mx-auto flex w-3/5 flex-col items-end text-right">
              <p className={`${textFont.className} p-4 text-3xl leading-snug`}>
                {content}
              </p>
              <Link
                className={`${titleFont.className} shadow-element-grey z-40 mt-4 flex items-center rounded bg-customDarkGreen p-4
            tracking-wider text-customWhite underline duration-200 hover:scale-105 hover:bg-customMediumGreen active:scale-90`}
                href={path}
              >
                Learn More <FaArrowAltCircleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>{" "}
      </Fade>
    </div>
  );
}
