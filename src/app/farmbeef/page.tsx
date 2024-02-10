import Image from "next/image";
import seregy2 from "../../../public/images/seregy2.jpg";
import JPELlabel from "../../../public/images/JPELlabel.svg";
import beefposter from "../../../public/images/beefposter.png";
import { titleFont, textFont } from "../utils/fonts";
import supportlocal from "../../../public/images/supportlocal.png";
import buybeefcontent from "../../content/BuyBeefContent/buybeefcontent";
import BeefCard from "@/app/farmbeef/BeefCard";
import Header from "@/components/GreenHeader";
import usda from "../../../public/images/usda.png";

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
          <div className="mx-2 mt-[12rem] flex w-[97%] flex-col items-center justify-center gap-4 pb-20">
            <hr className="mb-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr>

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
            <hr className="mt-10 w-[70%] border-b border-customMediumGreen opacity-40"></hr>
          </div>

          {/* <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div> */}
          <Header
            top="top-[100%]"
            header="Contact us Today for Fresh Farm Beef!"
            subheader="Call us at &nbsp;&nbsp;719 - 123 - 4566"
          />
        </div>
      </div>

      {/* TODO split into its own component */}
      <div className="mt-[6%] flex w-full flex-col items-center">
        <div className="shadow-element flex w-[80%] items-center justify-center rounded bg-customBrown bg-opacity-30">
          <div className=" shadow-element-light justify-content relative my-[1.5%] flex w-[97%]  items-center justify-center rounded bg-customWhite p-12">
            <div className="absolute bottom-10 right-10 flex h-[140px] w-[140px] items-center  justify-center rounded-full bg-[#F4ECE4]">
              <img
                src={supportlocal.src}
                className="min-h-[190px] min-w-[190px]"
              />
            </div>
            <div className=" flex h-full w-full items-center justify-center">
              {/* <div className="absolute top-[0] left-[15%] flex h-[140px] w-[140px] items-center justify-center rounded-full border-2 border-customBrown bg-[#F4ECE4]">
                <img src={usda.src} className="" />
              </div> */}
              <div className="mr-2 flex justify-start lg:w-2/3 sm:w-1/2">
                <Image src={JPELlabel} alt="cow" className="h-auto w-[650px]" />
              </div>
              <div className=" shadow-element box-content flex h-[100%] w-1/3 flex-col items-center justify-center rounded bg-customDarkGreen p-2">
                <div className="flex h-full w-full flex-col items-center justify-center rounded bg-customLightGreen bg-opacity-90 p-6">
                  <h4 className={`${titleFont.className} mb-4 text-2xl`}>
                    The Menu at JPEL:
                  </h4>
                  <ul
                    className={`${titleFont.className} shadow-element-light w-full rounded bg-customWhite bg-opacity-50 p-4 text-xl leading-normal tracking-wide`}
                  >
                    {buybeefcontent.cutsAndPrices.map(({ cut, price }) => (
                      <li key={cut}>
                        <strong>{cut}:</strong>&nbsp;{" "}
                        <span className={`${textFont.className}`}>{price}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 flex flex-col items-start">
                    <p className={`${textFont.className}`}>
                      *We have many more cuts for purchase, please call for
                      availability
                    </p>
                    <p className={`${textFont.className} mt-2`}>
                      *Prices are subject to change
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* add section for all the things the farm is free of */}
    </div>
  );
}
