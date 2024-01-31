import Image from "next/image";
import Link from "next/link";
import seregy2 from "../../../public/images/seregy2.jpg";
import beefposter from "../../../public/images/beefposter.png";
import { titleFont, textFont } from "../utils/fonts";

export default function FarmBeef() {
  return (
    <div className="justify-content flex min-h-[100vh] min-w-[100%] flex-col items-center bg-customBrown">
      <div className="h-[90%] w-[95%] bg-customLightGreen">
        <div className="relative h-[350px] w-[100%] overflow-hidden">
          <Image src={seregy2} alt="cow" className="mt-[-20px]" />
        </div>

        {/* header */}

        <div className="relative flex w-full items-center justify-center bg-customWhite">
          <div
            className={`${titleFont.className} shadow-element absolute  top-[-1rem]  flex  flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
          >
            <h2 className="text-center">
              Elevating Taste: The Highland Beef Experience
            </h2>
            <h5
              className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
            >
              Taste Quality of Highland Beef from JPEL Farms
            </h5>
          </div>

          <div className="flex w-full gap-4 mt-[10rem]">
            <div className="flex flex-1 items-center bg-cyan-200">
              <div className="w-[25%]">
                <p className={`${textFont.className} text-[200px]`}>1</p>
              </div>
              <div className="w-[75%]">
                Taste Quality of Highland Beef from JPEL FarmsTaste Quality of
                Highland Beef from JPEL FarmsTaste Quality of Highland Beef from
                JPEL Farms
              </div>
            </div>
            <div className="flex flex-1 h-full items-center bg-cyan-200">
              <div className="w-[25%]">
                <p className={`${textFont.className} text-[200px]`}>2</p>
              </div>
              <div className="w-[75%]">
                Taste Quality of Highland Beef from JPEL FarmsTaste Quality of
                Highland Beef from JPEL FarmsTaste Quality of Highland Beef from
                JPEL Farms
              </div>
            </div>
            <div className="flex flex-1 items-center bg-cyan-200">
              <div className="w-[25%]">
                <p className={`${textFont.className} text-[200px]`}>3</p>
              </div>
              <div className="flex w-[75%] flex-col">
                <p>
                  of Highland Beef from JPEL FarmsTaste Quality of Highland Beef
                  from JPEL Farms
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
}
