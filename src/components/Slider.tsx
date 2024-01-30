"use client";
import { useState } from "react";
import Link from "next/link";
import paths from "@/app/paths";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

import { textFont, titleFont } from "../app/utils/fonts";
import { errorToJSON } from "next/dist/server/render";
import { unstable_noStore } from "next/cache";
import { block } from "sharp";

const facts = [
  `Highland cattle exhibit a hierarchical social structure based on age and gender. Older individuals hold dominance over 
younger ones, and males have a higher ranking than females. As young males mature, they gradually assume 
dominance over adult females, typically around the age of 2 years. Furthermore, calves born to the top-ranking 
cow automatically acquire elevated positions within the herd, even without their mother's influence.`,

  `Unlike many other cattle breeds, Highland cattle do not typically favor barn feeding. Instead, 
they prefer the freedom to forage in open pastures.They spend approximately 8 hours per day grazing, and they can
consume a substantial amount of grass. On average, a Highland cattle 
individual is capable of ingesting around 70 kilograms (150 pounds) of grass daily. This behavior contributes to the 
overall resilience and adaptability of Highland cattle in diverse environments.`,

  `Originally from the rugged landscapes of Scotland, the Highland Cow proudly holds the  title of being the oldest 
registered cattle breed in the world. With a rich history that spans centuries, these hardy and iconic creatures 
have stood the test of time, embodying the enduring legacy of traditional farming practices. Their unique 
characteristics, including the signature long, shaggy hair and impressive curved horns, set them apart in 
the world of cattle farming.`,

  `Highland cattle feature a unique dorsal hump known as a "dossan," characterized by a prominent, shaggy 
lump on their backs. This distinctive trait adds to their iconic appearance. Despite its thickness, 
Highland cattle's long hair doesn't impede their vision. They can navigate their surroundings effectively, 
showcasing the breed's adaptability to diverse environments, from mountainous terrains to open fields.`,

  `In Celtic lore, the Highland Cow is not only a symbol of resilience and strength but is also believed to
   possess a divine connection to nature. Revered as guardians of the land, these majestic creatures are 
   thought to embody the spirit of ancient landscapes, serving as a bridge between the earthly realm and 
   the mystical forces that shape it. Their shaggy coats and imposing horns are seen as manifestations of 
   natural power, contributing to the enduring mythos that surrounds them.`,
];

export default function Slider() {
  const [factIndex, setFactIndex] = useState(0);

  const showPreviousFact = () => {
    setFactIndex((index) => {
      if (index === 0) return facts.length - 1;
      return index - 1;
    });
  };

  const showNextFact = () => { 
    console.log(window.innerWidth)
    setFactIndex((index) => {
      if (index === facts.length - 1) return 0;
      return index + 1;
     
    });
  };

  return (
    <div className="absolute left-[7%] top-1/2 w-1/3 -translate-y-1/2 transform rounded bg-customDarkGreen bg-opacity-80 p-5">
      <div className=" relative flex w-full flex-col items-end  bg-customBrown p-2 text-left ">
        <div className="flex h-auto w-full flex-shrink flex-grow overflow-hidden transition-transform ease-in-out duration-300">
          {facts.map((fact) => (
            <p
              key={fact}
              style={{ translate: `${-100 * factIndex}%` }}
              className={`${textFont.className} min-w-full rounded bg-customBeige bg-opacity-40 p-5 text-2xl flex items-center fact-slider`}
            >
              {fact}
            </p>
          ))}
        </div>

        <Link
          className={`${titleFont.className} mt-2 rounded bg-customBeige p-4`}
          href={paths.farmBeefPath()}
        >
          Read More
        </Link>
      </div>
      <button
        onClick={showPreviousFact}
        className="absolute bottom-0 left-[-15%] top-0 cursor-pointer text-7xl duration-200 hover:bg-customDarkGreen hover:bg-opacity-90 "
      >
        <MdArrowLeft />
      </button>
      <button
        onClick={showNextFact}
        className="absolute bottom-0 right-[-15%] top-0 cursor-pointer py-5 text-7xl duration-200 hover:bg-customDarkGreen hover:bg-opacity-90"
      >
        <MdArrowRight />
      </button>
    </div>
  );
}

