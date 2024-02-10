import Image from "next/image";
import seregy2 from "../../../public/images/seregy2.jpg";

import line from "../../../public/images/line.png";

import buybeefcontent from "../../content/BuyBeefContent/buybeefcontent";
import BeefCard from "@/app/farmbeef/BeefCard";
import Header from "@/components/GreenHeader";
import usda from "../../../public/images/usda.png";
import Menu from "./Menu";
import FreeFrom from "@/components/FreeFrom/FreeFrom";

export default function FarmBeef() {
  return (
    <div className="justify-content relative flex h-full min-w-[100%] flex-col items-center bg-customBeige bg-opacity-20 pb-4">
      <div className="h-[90%] w-[95%]">
        <div className="relative h-[350px] w-[100%] overflow-hidden">
          <Image
            src={seregy2}
            alt="cow"
            className="shadow-element mt-[-20px]"
          />
        </div>

        {/* header */}

        <div className="relative mb-[6rem] flex w-full items-center justify-center ">
          <Header
            left=""
            ml=""
            translatex=""
            transform=""
            header="Elevating Taste: The Highland Beef Experience"
            subheader="Why JPEL Farm's Beef is a Class Above the Rest"
            top="top-[-1rem]"
          />

          <hr className=" border-b border-customMediumGreen"></hr>
          <div className=" absolute -z-10 my-auto mt-[5rem] h-[100%] w-[100%]  rounded border-2 border-customMediumGreen opacity-20"></div>
          {/* 3 content divs */}
          <div className="mx-2 mt-[9rem] flex w-[97%] flex-col items-center justify-center gap-4 pb-20">
            {/* <hr className="mb-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr> */}
            <img src={line.src} alt="line" className="mb-10 w-1/3" />
            <div className="flex w-full items-stretch justify-center gap-4">
              {/* TODO put number and color into content file and then map over */}
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
            </div>
            <img src={line.src} alt="line" className="mb-[-4rem] mt-10 w-1/3" />
            {/* <hr className="mt-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr> */}
          </div>

          {/* <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div> */}
          <Header
            top="top-[100%]"
            header="Contact us Today for Fresh Farm Beef!"
            subheader="Call us at &nbsp;&nbsp;719 - 123 - 4566"
          />
        </div>
      </div>

      <Menu />
      <FreeFrom />
    </div>
  );
}
