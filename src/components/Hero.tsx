import Image from "next/image"
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { titleFont, textFont } from "@/app/utils/fonts"
import ybagmedia from '../../public/images/ybagmedia.jpg';
import paths from "@/app/paths";

export default function Hero() {
    return (

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
    )
}