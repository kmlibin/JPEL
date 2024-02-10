import React from "react";
import { titleFont } from "@/app/utils/fonts";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { StaticImageData } from "next/image";
import line from '../../../../public/images/line.png'

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
    <div
      className={`${my} shadow-element-light h-[450px] flex w-full items-stretch bg-customMediumGreen bg-opacity-60 `}
    >
      <div className="min-h-full w-1/2 overflow-hidden ">
        <Image alt="cow" src={image} className="min-h-full" />
      </div>

      <div className=" relative flex w-1/2 items-stretch justify-start">
        <div className="flex h-full w-3/4 flex-col items-center justify-center bg-customLightGreen bg-opacity-70 text-center">
          <div className="shadow-element-light flex h-[90%] w-[90%] flex-col items-center justify-center rounded bg-customWhite bg-opacity-50">
            <Image src={icon} alt="corn" height={100} width={100} />
            <div className="mt-3 flex max-h-full w-full flex-col items-center justify-center">
              <h3 className={`${titleFont.className} text-3xl`}>
                {text.header}
              </h3>
              <img src={line.src} alt="line" className="w-1/2" />
              {/* <hr className="my-2 w-[70%] border-b border-customBrown opacity-80"></hr> */}
              <p className="w-5/6 pt-2 text-[18px]">{text.text}</p>
            </div>
          </div>
        </div>
        <div className="absolute right-[-3.5rem] top-9 h-full">
          <FaArrowLeftLong className="pulsate text-[10rem] text-customBrown opacity-90" />
        </div>
      </div>
    </div>
  );
};

export default FeedingCard;
