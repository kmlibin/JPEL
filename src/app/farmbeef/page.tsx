"use client";
import Image from "next/image";
import seregy2 from "../../../public/images/seregy2.jpg";

import line from "../../../public/images/line.png";

import buybeefcontent from "../../content/BuyBeefContent/buybeefcontent";
import BeefCard from "@/app/farmbeef/BeefCard";
import Header from "@/components/GreenHeader";

import { Fade, JackInTheBox } from "react-awesome-reveal";
import Menu from "./Menu";
import FreeFrom from "@/components/FreeFrom/FreeFrom";

//do this, switch from client to server
// export const metadata: Metadata = {
//   title: "JPEL Farms | About Us",
//   description:
//     "Discover JPEL Farms, a family-run farm in Colorado, offering naturally organic and uniquely flavorful Highland Beef. Learn about our commitment to local and sustainable farming practices.",
//   openGraph: {
//     type: "website",
//     url: "https://...",
//     title: "JPEL Farms | About Us",
//     description: "enter description here",
//     siteName: "JPEL Farms",
//     images: [{ url: "/images/backfill.png", width: 500, height: 500 }],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     noarchive: true,
//     nosnippet: true,
//     noimageindex: true,
//     nocache: true,
//   },
//   referrer: "origin-when-cross-origin",
//   authors: {
//     name: "Libin Web Development",
//     url: "https://kelli-portfolio.netlify.app",
//   },
//   keywords:
//     "JPEL Farms, Colorado Beef, Organic Beef, Grassfed, USDA Certified, Local Beef, Highland Cattle, Grass-fed beef, Local Beef, Family Farm, Front Range Beef, Colorado Springs",
// };


export default function FarmBeef() {
  return (
    <div className="justify-content relative flex h-full min-w-[100%] flex-col items-center bg-customBeige bg-opacity-20 pb-4">
      <div className="h-[90%] w-[95%]">
        <div className="relative h-[350px] w-[100%] overflow-hidden">
          <Image
            src={seregy2}
            alt="cow"
            className="shadow-element mt-[-20px] w-[100%]"
            priority
            placeholder="blur"
            
          />
        </div>

        {/* header */}

        <div className="relative mb-[6rem] flex w-full flex-col items-center justify-center ">
          <Header
            left=""
            ml=""
            translatex=""
            transform=""
            header="Elevating Taste: The Highland Beef Experience"
            subheader="Why JPEL Farm's Beef is a Class Above the Rest"
            top="top-[-1rem]"
            direction="down"
          />

          <hr className=" border-b border-customMediumGreen"></hr>
          <div className=" absolute -z-10 my-auto mt-[5rem] h-[100%] w-[100%]  rounded border-2 border-customMediumGreen opacity-20"></div>
          {/* 3 content divs */}
          <div className="mx-2 mt-[10rem] flex w-[97%] flex-col items-center justify-center gap-4 pb-20">
            {/* <hr className="mb-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr> */}
            <img src={line.src} alt="line" className="mb-10 w-1/3" />

            {/* had to go back to NOT mapping for each component, glitch with second classname, would inconsistently pass the color */}
            <div className="flex w-full items-stretch justify-center gap-4">
              <Fade
                className="flex w-full items-stretch justify-center gap-4"
                cascade
                damping={1}
                duration={500}
                direction="left"
                triggerOnce
              >
                <BeefCard
                  number="1"
                  content={buybeefcontent.contentOne}
                  color="bg-customBeige"
                />
                <BeefCard
                  number="2"
                  content={buybeefcontent.contentTwo}
                  color="bg-customRedBrown"
                />
                <BeefCard
                  number="3"
                  content={buybeefcontent.contentThree}
                  color="bg-customBrown"
                />
              </Fade>
            </div>
            <img src={line.src} alt="line" className="mb-[-3rem] mt-10 w-1/3" />
            {/* <hr className="mt-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr> */}
          </div>

          {/* <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div> */}
          <JackInTheBox triggerOnce className="flex w-full justify-center">
            <Header
              top="top-[100%]"
              header="Contact us Today for Fresh Farm Beef!"
              subheader="Call us at &nbsp;&nbsp;719 - 123 - 4566"
              direction=""
            />
          </JackInTheBox>
        </div>
      </div>
      <Fade
        duration={2000}
        direction="up"
        triggerOnce
        className="flex w-full items-center justify-center"
      >
        <Menu />
      </Fade>
      <FreeFrom />
    </div>
  );
}
