import cottage from "../../public/images/cottage.jpg";
import seregykotenev from "../../public/images/seregykotenev.jpg";
import paths from "./paths";
import Hero from "@/components/Home/Hero";
import HomeCard from "@/components/Home/HomeCard";
import { homecontent } from "@/content/HomeContent/homecontent.js";
import FactsCard from "@/components/Home/FactsCard";


export default function Home() {
  return (
   
    <main className="flex flex-col bg-customWhite"> 
      {/* hero */}
      <Hero />

      {/* who we are section */}
      <HomeCard
        imgSrc={cottage}
        header={homecontent.cardOne.header}
        subheader={homecontent.cardOne.subheader}
        content={homecontent.cardOne.content}
        path={paths.aboutPath()}
        ml="ml-[11.5rem]"
        top="top-[-1rem]"
        left="left-[2%]"
        translatex="-translate-x-1/2"
        transform="transform"
      />

      {/* fun facts section */}
      <FactsCard />

      {/* buy beef section */}
      <HomeCard
        imgSrc={seregykotenev}
        subheader={homecontent.cardTwo.header}
        header={homecontent.cardTwo.subheader}
        path={paths.farmBeefPath()}
        content={homecontent.cardTwo.content}
        ml="ml-[24.4rem]"
        top="top-[-1rem]"
        left="left-[2%]"
        translatex="-translate-x-1/2"
        transform="transform"
      />
    </main>
  );
}
