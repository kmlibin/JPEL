import React from "react";
import { titleFont, textFont } from "@/app/utils/fonts";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import line from "../../../../public/images/line.png";
import { Fade } from "react-awesome-reveal";

interface FeedingCardProps {
  my?: string;
  text: {
    header: string;
    text: string;
  };
  image: StaticImageData;
  icon: StaticImageData;
}
const FeedingCard = ({ my, text, image, icon }: FeedingCardProps) => {
  return (
    <Fade duration={1000} direction="up" triggerOnce>
      <div
        className={`${textFont.className} ${my} shadow-element-light relative box-content flex h-[450px] flex-col justify-evenly rounded bg-customMediumGreen bg-opacity-90 p-9 leading-normal tracking-wide`}
      >
        <div
          className={`shadow-element-light flex h-[450px] w-full items-stretch rounded border-2 border-customDarkGreen bg-customBrown bg-opacity-80 `}
        >
          <div className="min-h-full w-1/2 overflow-hidden ">
            <Image alt="cow" src={image} className="min-h-full w-full" placeholder="blur" priority />
          </div>

          <div className=" relative flex w-1/2 items-stretch justify-start">
            <div className="flex h-full w-3/4 flex-col items-center justify-center bg-customLightGreen bg-opacity-70 text-center">
              <div className="shadow-element-light flex h-[90%] w-[90%] flex-col items-center justify-center rounded bg-customWhite bg-opacity-50">
                <Image src={icon} alt="icon" height={100} width={100} />
                <div className="mt-3 flex max-h-full w-full flex-col items-center justify-center">
                  <h3 className={`${titleFont.className} text-3xl`}>
                    {text.header}
                  </h3>
                  <img src={line.src} alt="line" className="w-1/2" />
                  <p className="w-5/6 pt-2 text-[18px]">{text.text}</p>
                </div>
              </div>
            </div>
            <div className="absolute right-[-4.5rem] top-9 h-full">
              <FaArrowLeftLong className="pulsate text-[11rem] text-customRedBrown " />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default FeedingCard;
