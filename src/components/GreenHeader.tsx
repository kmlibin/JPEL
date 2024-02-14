"use client";
import { titleFont, textFont } from "@/app/utils/fonts";
import { Slide } from "react-awesome-reveal";

interface HeaderProps {
  header: string;
  subheader?: string;
  top?: string;
  left?: string;
  ml?: string;
  translatex?: string;
  transform?: string;
  direction?: any;
}

export default function Header({
  header,
  subheader,
  top,
  left,
  ml,
  translatex,
  transform,
  direction
}: HeaderProps) {
  return (
    <div
      className={`${titleFont.className} shadow-element absolute ${left} ${ml} ${translatex} ${transform} ${top} top-[-1rem]  flex  flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
    >
      {" "}
      <Slide direction={direction} triggerOnce>
        <h2 className="text-center">{header}</h2>
        <h5
          className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
        >
          {subheader}
        </h5>
      </Slide>
    </div>
  );
}
