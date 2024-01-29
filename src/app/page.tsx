import Image from "next/image";
import Link from "next/link";
// import shanerounce from "../../public/images/shanerounce.jpg";
import ybagmedia from "../../public/images/ybagmedia.jpg";
// import cow from "../../public/images/cow.jpg";
import { textFont, titleFont } from "../app/utils/fonts";
import paths from "./paths";

export default function Home() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10 ">
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
        <h2 className={`${titleFont.className} mb-7 text-4xl text-customWhite`}>
          Naturally Organic, Uniquely Flavorful
        </h2>
        <Link
          className={`${textFont.className} rounded bg-customBeige p-4`}
          href={paths.farmBeefPath()}
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
