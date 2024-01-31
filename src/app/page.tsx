import Image from "next/image";
import Link from "next/link";
import cottage from "../../public/images/cottage.jpg";
import seregykotenev from "../../public/images/seregykotenev.jpg";
import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";
import Slider from "@/components/Slider";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-col bg-customWhite">
      {/* hero */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={ybagmedia}
            fill
            style={{ objectFit: "cover" }}
            alt="highlands cow"
          />
          <div className="absolute inset-0 bg-slate-800 bg-opacity-30"></div>
        </div>

        <div className="absolute bottom-[18%] right-[5%] flex flex-col items-center text-center">
          <h1 className={`${titleFont.className} text-6xl text-customWhite`}>
            Quality Mountain-Raised Beef
          </h1>
          <h3
            className={`${titleFont.className} mb-7 text-4xl text-customWhite`}
          >
            Naturally Organic, Uniquely Flavorful
          </h3>
          <Link
            className={`${textFont.className} shadow-outline flex items-center rounded bg-customBeige p-4 underline duration-300 hover:scale-105 hover:bg-customMediumGreen hover:text-customWhite active:scale-90`}
            href={paths.farmBeefPath()}
          >
            <p className="font-bold tracking-wider">Read More</p>{" "}
            <FaArrowAltCircleRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* who we are section */}

      <div className="relative mx-auto flex w-full items-center justify-center bg-customWhite">
          <div
          className={`${titleFont.className} shadow-element absolute left-[2%] top-[-1rem] ml-[11.5rem] flex -translate-x-1/2 transform flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
        >
          <h2 className="text-center">Who We Are</h2>
          <h5
            className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide`}
          >
            Local and Sustainable
          </h5>
        </div>
        <div className="shadow-element-grey my-[10rem] flex h-[100%] w-[90%] items-center justify-center rounded bg-customBrown bg-opacity-30 p-6">
          <div className="shadow-element flex h-[95%] w-[100%] items-center justify-between rounded bg-customLightGreen bg-opacity-60 p-4">
            <div className="flex w-1/3 flex-col items-center justify-center rounded-[50%] py-3">
              <Image
                src={cottage}
                height={350}
                width={350}
                alt="our ranch"
                className="shadow-element rounded-[50%] border border-gray-400"
              />
              {/* <h4 className={`${titleFont.className} text-lg my-4`}>John & Peggy</h4> */}
            </div>
            <div className="mx-auto flex w-3/5 flex-col items-end text-right">
              <p className={`${textFont.className} p-4 text-3xl leading-snug`}>
                Discover JPEL Farms, a family-run farm nestled in the scenic
                landscapes of Colorado. Our passion lies in the meticulous care
                and breeding of Scottish Highland Cattle, renowned for both
                showmanship and delectable meat. At JPEL Farms, our commitment
                to quality and tradition defines us. Join us on a journey that
                goes beyond the ordinary – where every bite tells a story of
                dedication and excellence.
              </p>
              <Link
                className={`${titleFont.className} shadow-element-grey mt-4 flex items-center rounded bg-customDarkGreen p-4 tracking-wider
                text-customWhite underline duration-200 hover:scale-105 hover:bg-customMediumGreen active:scale-90`}
                href={paths.aboutPath()}
              >
                Learn More <FaArrowAltCircleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* fun facts section */}
      <div className=" xlscreen relative flex w-full items-center justify-center lg:h-[110vh]">
        <h2
          className={`${titleFont.className} shadow-element absolute right-[2%] top-[-1rem] z-10 bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          The Highland Cow
        </h2>

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
      <div className="relative mx-auto flex h-full w-full items-center justify-center bg-customWhite">
        <div
          className={`${titleFont.className} shadow-element absolute left-[2%] top-[-1rem] ml-[24rem] flex -translate-x-1/2 transform flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
        >
          <h2 className="text-center">100% Free-Range, Grassfed Beef</h2>
          <h5
            className={`${textFont.className} mt-2 w-[50%] text-center text-lg tracking-wide`}
          >
            Tender and Equisitely Flavorful Cuts
          </h5>
        </div>
        <div className="shadow-element-grey my-[10rem] flex h-[100%] w-[90%] items-center justify-center rounded bg-customBrown bg-opacity-30 p-6">
          <div className="shadow-element flex h-[95%] w-[100%] items-center justify-between rounded bg-customLightGreen bg-opacity-60 p-4">
            <div className="flex w-1/3 justify-center rounded-[50%] py-3">
              <Image
                src={seregykotenev}
                height={350}
                width={350}
                alt="our ranch"
                className="shadow-element rounded-[50%] border border-gray-400"
              />
            </div>
            <div className="mx-auto flex w-3/5 flex-col items-end text-right">
              <p className={`${textFont.className} text-3xl leading-snug`}>
                Discover the exceptional qualities of Highland Beef – a{" "}
                <span className="font-bold">natural </span>
                and <span className="font-bold">nutritious</span> choice. With
                lower fat and cholesterol, higher levels of omega-3 and CLA, and
                rich with vitamins and minerals, Highland beef promotes heart
                health and overall well-being. Slow-matured, lean, and packed
                with essential nutrients, Highland Beef offers unparalleled
                flavor, tenderness, and juiciness. JPEL Farms proudly offers
                USDA-certified cuts.
              </p>
              <Link
                className={`${titleFont.className} shadow-element-grey mt-4 flex items-center rounded bg-customDarkGreen p-4 tracking-wider text-customWhite
                 underline duration-200 hover:scale-105 hover:bg-customMediumGreen active:scale-90`}
                href={paths.farmBeefPath()}
              >
                Learn More <FaArrowAltCircleRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
