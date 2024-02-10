import React from "react";
import { titleFont, textFont } from "@/app/utils/fonts";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import line from "../../../../public/images/line.png";

interface FeedingCardProps {
  mt?: string | undefined;
  mb?: string | undefined;
  my?: string | undefined;
  header: string;
  text: string;
  image: string;
  icon: string;
  alt: string;
}

const FeedingCard = ({
  mb,
  my,
  mt,
  text,
  header,
  image,
  icon,
  alt,
}: FeedingCardProps) => {
  return (
    <div
      className={`${textFont.className} ${mt} ${mb} ${my} shadow-element-light relative box-content flex h-[450px] w-3/4 flex-col justify-evenly rounded bg-customMediumGreen bg-opacity-90 p-9 leading-normal tracking-wide`}
    >
      <div
        className={`shadow-element-light flex h-[450px] w-full items-stretch rounded border-2 border-customDarkGreen bg-customBrown bg-opacity-80 `}
      >
        <div className="min-h-full w-1/2 overflow-hidden ">
          <img alt={alt} src={image} className="min-h-full w-full" />
        </div>

        <div className=" relative flex w-1/2 items-stretch justify-start">
          <div className="flex h-full w-3/4 flex-col items-center justify-center bg-customLightGreen bg-opacity-70 text-center">
            <div className="shadow-element-light flex h-[90%] w-[90%] flex-col items-center justify-center rounded bg-customWhite bg-opacity-50">
              <img src={icon} alt="icon" height={100} width={100} />
              <div className="mt-3 flex max-h-full w-full flex-col items-center justify-center">
                <h3 className={`${titleFont.className} text-3xl`}>{header}</h3>
                <img src={line.src} alt="line" className="w-1/2" />
                {/* <hr className="my-2 w-[70%] border-b border-customBrown opacity-80"></hr> */}
                <p className="w-5/6 pt-2 text-[18px]">{text}</p>
              </div>
            </div>
          </div>
          <div className="absolute right-[-4.5rem] top-9 h-full">
            <FaArrowLeftLong className="pulsate text-[11rem] text-customRedBrown " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedingCard;
