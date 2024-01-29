import Image from "next/image";
import Link from "next/link";
import cottage from "../../public/images/cottage.jpg";
// import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
// import cow from "../../public/images/cow.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";

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

      <div className=" bg-customWhite relative mx-auto flex w-4/5 items-center justify-center pb-[2rem]">
        <h2
          className={`${titleFont.className} absolute left-[5%] top-[-1rem] -translate-x-1/2 transform bg-customDarkGreen p-4 text-5xl text-customWhite`}
        >
          Who We Are
        </h2>
        <div className="flex justify-center items-center mt-32  bg-customLightGreen rounded p-8">
        <div className="w-1/3 rounded-[50%]">
          <Image
            src={cottage}
            height={300}
            width={300}
            alt="our ranch"
            className="rounded-[50%]"
          />
        </div>
        <div className="w-3/5 flex flex-col items-end text-right">
          <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <Link
            className={`${textFont.className} rounded bg-customBeige p-4 mt-4`}
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
