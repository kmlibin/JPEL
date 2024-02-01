import Image from "next/image";
import Link from "next/link";
import seregy2 from "../../../public/images/seregy2.jpg";
import beefposter from "../../../public/images/beefposter.png";
import { titleFont, textFont } from "../utils/fonts";
import shopsmall from "../../../public/images/shopsmall.png";
import buybeefcontent from "../../content/BuyBeefContent/buybeefcontent";
import BeefCard from "@/components/BeefCard";
import Header from "@/components/Header";

export default function FarmBeef() {
  return (
    <div className="justify-content flex min-h-[100vh] min-w-[100%] flex-col items-center bg-customBeige bg-opacity-20">
      <div className="h-[90%] w-[95%]">
        <div className="relative h-[350px] w-[100%] overflow-hidden">
          <Image
            src={seregy2}
            alt="cow"
            className="shadow-element mt-[-20px]"
          />
        </div>

        {/* header */}

        <div className="relative flex w-full items-center justify-center ">
            <Header left="" ml="" translatex= "" transform="" header="Elevating Taste: The Highland Beef Experience" subheader="Why JPEL Farm's Beef is a Class Above the Rest" top="top-[-1rem]"/>


          <hr className=" border-b border-customMediumGreen opacity-20"></hr>

          {/* 3 content divs */}
          <div className="mx-2 mt-[12rem] flex w-full flex-col items-center justify-center gap-4">
            <hr className="mb-10 w-[70%] border-b border-customMediumGreen opacity-20"></hr>

            <div className="flex w-full items-stretch justify-center gap-4">
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
            <hr className="mt-10 w-[70%] border-b border-customMediumGreen opacity-20"></hr>
          </div>
        </div>
      </div>

      <div className="relative mt-[6%] flex w-full flex-col items-center">
        <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div>
        <div
          className={`${titleFont.className} shadow-element absolute  top-[-2rem]  flex  flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
        >
          <h2 className="text-center">Contact us Today for Fresh Farm Beef!</h2>
          <h5
            className={`${textFont.className} mt-2 w-[full] text-center text-xl tracking-wide text-customLightGreen opacity-90`}
          >
            Call us at &nbsp;&nbsp;719 - 123 - 4566
          </h5>
        </div>

        <div className="shadow-element-light justify-content mb-[5%] mt-[10%] box-content flex w-3/4  items-center justify-center rounded bg-customWhite p-12">
          <div className="flex h-full w-full items-center justify-center">
            <div className="relative w-2/3 pl-7">
              <Image src={beefposter} alt="cow" height={400} width={600} />
            </div>
            <div className="shadow-element relative box-content flex h-[100%] w-1/3 flex-col items-center justify-center rounded bg-customDarkGreen p-2">
              <Image
                src={shopsmall}
                className="absolute left-[-28%] top-[60%] rounded-full"
                alt="shopsmall"
                height={150}
                width={150}
              />
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

      {/* add section for all the things the farm is free of */}
    </div>
  );
}
