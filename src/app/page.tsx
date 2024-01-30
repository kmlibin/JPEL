import Image from "next/image";
import Link from "next/link";
import cottage from "../../public/images/cottage.jpg";
import seregykotenev from "../../public/images/seregykotenev.jpg";
import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
// import cow from "../../public/images/cow.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";
import Slider from "@/components/Slider";
import { FaArrowAltCircleRight } from "react-icons/fa";

// import { LiaHatCowboySideSolid } from "react-icons/lia";

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

        <div className="absolute bottom-[18%] right-[5%] text-center flex flex-col items-center">
          <h1 className={`${titleFont.className} text-6xl text-customWhite`}>
            Quality Mountain-Raised Beef
          </h1>
          <h3
            className={`${titleFont.className} mb-7 text-4xl text-customWhite`}
          >
            Naturally Organic, Uniquely Flavorful
          </h3>
          <Link
            className={`${textFont.className} flex items-center shadow-element-grey rounded bg-customBeige p-4 underline duration-200 hover:bg-customDarkGreen hover:text-customWhite active:scale-90`}
            href={paths.farmBeefPath()}
          >
            <p className="font-bold tracking-wider">Read More</p> <FaArrowAltCircleRight className="ml-2" />
          </Link>
        </div>
      </div>

      {/* who we are section */}

      <div className="relative mx-auto flex w-full items-center justify-center bg-customWhite">
        <h2
          className={`${titleFont.className} shadow-element absolute left-[2%] top-[-1rem] ml-[11.75rem] -translate-x-1/2 transform bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          Who We Are
        </h2>
        <div className="shadow-element-grey my-[10rem] flex h-[100%] w-[90%] items-center  justify-center rounded bg-customBeige bg-opacity-50 p-6">
          <div className="shadow-element flex h-[95%] w-[100%] items-center justify-center rounded bg-customLightGreen bg-opacity-50 p-4">
            <div className="flex w-1/3 justify-start rounded-[50%]">
              <Image
                src={cottage}
                height={350}
                width={350}
                alt="our ranch"
                className="shadow-element rounded-[50%] border border-gray-400"
              />
            </div>
            <div className="flex w-3/5 flex-col items-end text-right">
              <p className={`${textFont.className} p-4 text-3xl`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Link
                className={`${titleFont.className} shadow-element-grey mt-4 flex items-center rounded bg-customDarkGreen p-4 tracking-wider
                 text-customWhite underline`}
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

        <div className="relative flex h-full w-full items-center justify-end rounded bg-customLightGreen bg-opacity-50">
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
        <h2
          className={`${titleFont.className} shadow-element absolute left-[2%] top-[-1rem] ml-[24rem] -translate-x-1/2 transform bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          100% Free-Range, Grassfed Beef
        </h2>
        <div className="shadow-element-grey my-[10rem] flex h-[100%] w-[90%] items-center  justify-center rounded bg-customBeige bg-opacity-50 p-6">
          <div className="shadow-element flex h-[95%] w-[100%] items-center justify-center rounded bg-customLightGreen bg-opacity-50 p-4">
            <div className="flex w-1/3 justify-start rounded-[50%]">
              <Image
                src={seregykotenev}
                height={350}
                width={350}
                alt="our ranch"
                className="shadow-element rounded-[50%] border border-gray-400"
              />
            </div>
            <div className="flex w-3/5 flex-col items-end text-right">
              <p className={`${textFont.className} text-3xl`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <Link
                className={`${titleFont.className} shadow-element-grey mt-4 flex items-center rounded bg-customDarkGreen p-4 tracking-wider
                 text-customWhite underline duration-200 hover:bg-customBrown active:scale-90`}
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
