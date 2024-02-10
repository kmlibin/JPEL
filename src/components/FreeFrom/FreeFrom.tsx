import React from "react";
import nocorn from "./nocorn.png";
import nodrugs from "./nodrugs.png";
import nopests from "./nopests.png";
import nosoy from "./nosoy.png";
import usda from "./usda.png";
import coproud from "./coproud.png";
import quality from './quality.png'

import { titleFont } from "@/app/utils/fonts";

const images = [
  { img: coproud, alt: "cattle raised in Colorado" },
  { img: nocorn, alt: "no corn" },
  { img: nosoy, alt: "no soy" },
  { img: nopests, alt: "no pests" },
  { img: nodrugs, alt: "no hormones or antibiotics" },
];
const FreeFrom = () => {
  return (
    <div className="shadow-element my-4 flex w-[95%] flex-col items-center justify-center bg-customBrown bg-opacity-25 py-4">
      <div
        className={`${titleFont.className} flex flex-col items-center justify-center text-3xl`}
      >
        <img src={quality.src} />
     
      </div>
      <div className="justify-content, flex w-full flex-wrap items-center justify-center">
        {images.map((image) => (
          <img
            src={image.img.src}
            alt={image.alt}
            className="h-[250px] w-[250px]"
          />
        ))}
      </div>
    </div>
  );
};

export default FreeFrom;
