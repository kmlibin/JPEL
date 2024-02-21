import Header from "@/components/GreenHeader";

import Image from "next/image";
import narrowone from "../../../../public/images/narrow2.jpg";

import history from "@/content/OurCattleContent/history.js";

import HistoryPost from "./HistoryPost";
import { Metadata } from "next";

//do this 
export const metadata: Metadata = {
  title: "JPEL Farms | Highland Cattle History",
  description:
    "Discover JPEL Farms, a family-run farm in Colorado, offering naturally organic and uniquely flavorful Highland Beef. Learn about our commitment to local and sustainable farming practices.",
  openGraph: {
    type: "website",
    url: "https://...",
    title: "JPEL Farms | About Us",
    description: "enter description here",
    siteName: "JPEL Farms",
    images: [{ url: "/images/backfill.png", width: 500, height: 500 }],
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  referrer: "origin-when-cross-origin",
  authors: {
    name: "Libin Web Development",
    url: "https://kelli-portfolio.netlify.app",
  },
  keywords:
    "JPEL Farms, Colorado Beef, Organic Beef, Grassfed, USDA Certified, Local Beef, Highland Cattle, Grass-fed beef, Local Beef, Family Farm, Front Range Beef, Colorado Springs",
};

export default function HistoryPage() {
  return (
    <div className="justify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20">
      <div className="h-[90%] w-[95%]">
        <div className=" top-0 h-[350px] w-[100%] overflow-hidden">
          <Image
            src={narrowone}
            alt="cow"
            className="shadow-element mt-[-90px] w-[100%]"
            priority
            placeholder="blur"
          />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <div className=" absolute my-auto h-[97%] w-[100%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="A Rich History of Highland Cattle"
            subheader="The World's Oldest Registered Cattle Breed"
            left="left-14"
          />
          {/* left="left-14" to put on left side*/}

          {/* //text content cards */}
          <HistoryPost history={history} />
        </div>
      </div>
    </div>
  );
}

