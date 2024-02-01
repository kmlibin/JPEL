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
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { GiCow } from "react-icons/gi";
import Hero from "@/components/Hero";
import HomeCard from "@/components/HomeCard";

export default function Home() {
  return (
    <main className="flex flex-col bg-customWhite">
      {/* hero */}
      <Hero />

      {/* who we are section */}
      <HomeCard
        imgSrc={cottage}
        header="Who We Are"
        subheader="Local and Sustainable"
        content="Discover JPEL Farms, a family-run farm nestled in the scenic
                landscapes of Colorado. Our passion lies in the meticulous care
                and breeding of Scottish Highland Cattle, renowned for both
                showmanship and delectable meat. At JPEL Farms, our commitment
                to quality and tradition defines us. Join us on a journey that
                goes beyond the ordinary – where every bite tells a story of
                dedication and excellence."
        path={paths.aboutPath()}
      />

      {/* fun facts section */}
      <div className=" xlscreen relative flex w-full items-center justify-center lg:h-[110vh]">
        <div
          className={`${titleFont.className} shadow-element absolute right-[2%] top-[-1rem] z-10 flex-col items-center bg-customDarkGreen  p-9 text-5xl text-customWhite`}
        >
          <h2 className={`${titleFont.className} `}>The Highland Cow</h2>
          <h5
            className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
          >
            Shaggy and Adorable
          </h5>
        </div>
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
      <HomeCard
        imgSrc={seregykotenev}
        subheader="Tender and Equisitely Flavorful Cuts"
        header="100% Free-Range, Grassfed Beef"
        path={paths.farmBeefPath()}
        content={`Discover the exceptional qualities of Highland Beef – a{" "}
                <span className="font-bold">natural </span>
                and <span className="font-bold">nutritious</span> choice. With
                lower fat and cholesterol, higher levels of omega-3 and CLA, and
                rich with vitamins and minerals, Highland beef promotes heart
                health and overall well-being. Slow-matured, lean, and packed
                with essential nutrients, Highland Beef offers unparalleled
                flavor, tenderness, and juiciness. JPEL Farms proudly offers
                USDA-certified cuts.`}
      />
    </main>
  );
}
