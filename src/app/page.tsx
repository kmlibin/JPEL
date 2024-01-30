import Image from "next/image";
import Link from "next/link";
import cottage from "../../public/images/cottage.jpg";
import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
// import cow from "../../public/images/cow.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";
import Slider from "@/components/Slider";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

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

        <div className="absolute bottom-[18%] right-[5%] text-center">
          <h1 className={`${titleFont.className} text-6xl text-customWhite`}>
            Quality Mountain-Raised Beef
          </h1>
          <h3
            className={`${titleFont.className} mb-7 text-4xl text-customWhite`}
          >
            Naturally Organic, Uniquely Flavorful
          </h3>
          <Link
            className={`${textFont.className} rounded bg-customBeige p-4`}
            href={paths.farmBeefPath()}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* who we are section */}

      <div className="relative mx-auto flex w-full items-center justify-center bg-customWhite">
        <h2
          className={`${titleFont.className} absolute left-[2%] top-[-1rem] ml-[11.75rem] -translate-x-1/2 transform bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          Who We Are
        </h2>
        <div className="my-40 flex w-4/5 items-center justify-center  rounded bg-customLightGreen p-8">
          <div className="flex w-1/3 justify-start rounded-[50%]">
            <Image
              src={cottage}
              height={300}
              width={300}
              alt="our ranch"
              className="rounded-[50%]"
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
              className={`${titleFont.className} mt-4 rounded bg-customBeige p-4`}
              href={paths.farmBeefPath()}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* fun facts section */}
      <div className=" relative flex w-full items-center justify-center bg-customLightGreen lg:h-[110vh] xlscreen">
        <h2
          className={`${titleFont.className} absolute right-[2%] top-[-1rem] z-10 bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          Interesting Facts
        </h2>

        <div className="relative flex h-full w-full items-center justify-end rounded bg-customLightGreen">
          <Slider />
          <div className="flex h-full lg:w-[85%] justify-end rounded-[50%]">
            <Image src={shanerounce} className="h-[100%]" style={{ objectFit: "cover" }} alt="our ranch" />
          </div>
        </div>
      </div>

      {/* location section */}
      <div className="relative mx-auto flex w-full items-center justify-center bg-customWhite">
        <h2
          className={`${titleFont.className} absolute left-[2%] top-[-1rem] ml-[11.75rem] -translate-x-1/2 transform bg-customDarkGreen p-12 text-5xl text-customWhite`}
        >
          Our Location
        </h2>
        <div className="my-40 flex w-4/5 items-center justify-center  rounded bg-customLightGreen p-8">
          <div className="flex w-1/3 justify-start rounded-[50%]">
            <Image
              src={cottage}
              height={300}
              width={300}
              alt="our ranch"
              className="rounded-[50%]"
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
              className={`${titleFont.className} mt-4 rounded bg-customBeige p-4`}
              href={paths.farmBeefPath()}
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
