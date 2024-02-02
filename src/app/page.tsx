import Image from "next/image";
import Link from "next/link";
import cottage from "../../public/images/cottage.jpg";
import seregykotenev from "../../public/images/seregykotenev.jpg";
import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";
import Slider from "@/components/Home/Slider";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { GiCow } from "react-icons/gi";
import Hero from "@/components/Home/Hero";
import HomeCard from "@/components/Home/HomeCard";
import homecontent from '@/content/HomeContent/homecontent.js'

export default function Home() {
  return (
    <main className="flex flex-col bg-customWhite">
      {/* hero */}
      <Hero />

      {/* who we are section */}
      <HomeCard
        imgSrc={cottage}
        header={homecontent.cardOne.header}
        subheader={homecontent.cardOne.subheader}
        content={homecontent.cardOne.content}
        path={paths.aboutPath()}
        ml="ml-[11.5rem]"
        top="top-[-1rem]"
        left="left-[2%]"
        translatex="-translate-x-1/2"
        transform="transform"
      />

      {/* fun facts section */}
      <div className=" xlscreen relative flex w-full items-center justify-center lg:h-[110vh]">
        <div
          className={`${titleFont.className} shadow-element absolute right-[2%] top-[-1rem] z-10 flex-col items-center bg-customDarkGreen  p-9 text-5xl text-customWhite`}
        >
          <h2 className={`${titleFont.className} `}>The Highland Cow</h2>
          <h5
            className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
          >
            Shaggy and Adorable
          </h5>
        </div>
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

      {/* buy beef section */}
      <HomeCard
        imgSrc={seregykotenev}
        subheader={homecontent.cardTwo.header}
        header={homecontent.cardTwo.subheader}
        path={paths.farmBeefPath()}
        content={homecontent.cardTwo.content}
        ml="ml-[24.4rem]"
        top="top-[-1rem]"
        left="left-[2%]"
        translatex="-translate-x-1/2"
        transform="transform"
      />
    </main>
  );
}
