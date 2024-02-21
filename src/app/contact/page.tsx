import Header from "@/components/GreenHeader";
import ContactContainer from "./ContactContainer";
import { Metadata } from "next";

//finish this
export const metadata: Metadata = {
  title: "JPEL Farms | Contact Us",
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
export default function ContactPage() {
  return (
    <div className="justify-content flex h-[150vh] w-full flex-col items-center justify-end bg-customBeige bg-opacity-20 pb-4">
      <div className="h-[90%] w-[95%] ">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40 py-2">
          <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Want to Learn More?"
            subheader="Call, Email, or Fill Out The Form Below!"
            left="left-14"
          />

          {/* contact container */}
          <ContactContainer />
        </div>
      </div>
    </div>
  );
}
