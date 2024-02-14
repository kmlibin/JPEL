import React from "react";
import nocorn from "./nocorn.png";
import nodrugs from "./nodrugs.png";
import nopests from "./nopests.png";
import nosoy from "./nosoy.png";

import coproud from "./coproud.png";
import quality from "./quality.png";
import {Fade} from "react-awesome-reveal";

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
    <div className="  mb-4 mt-[7rem] flex w-[95%] flex-col items-center justify-center  py-4">
      <Fade direction="up" duration={500} triggerOnce>
        <div
          className={`${titleFont.className} flex flex-col items-center justify-center text-3xl`}
        >
          <img src={quality.src} />
        </div>
        <div className="justify-content, flex w-full flex-wrap items-center justify-center">
          {images.map((image) => (
            <img
              key={image.alt}
              src={image.img.src}
              alt={image.alt}
              className="h-[250px] w-[250px]"
            />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default FreeFrom;
