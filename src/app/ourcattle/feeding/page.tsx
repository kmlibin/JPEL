"use client";
import Header from "@/components/GreenHeader";
import { textFont } from "@/app/utils/fonts";
import lukethornton from "../../../../public/images/lukethornton.jpg";
import suraang from "../../../../public/images/suraang.png";
import injection from "../../../../public/images/injection.png";
import freepik from "../../../../public/images/freepik.png";
import FeedingCard from "./FeedingCard";
import feedingplan from "../../../content/OurCattleContent/feedingplan";
import valdamaras from "../../../../public/images/ValdamarasD.jpg";
import FreeFrom from "../../../components/FreeFrom/FreeFrom";

export default function FeedingPage() {
  return (
    <div className="justify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20 pb-4 pt-[9rem]">
      <div className="h-[90%] w-[95%]">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40">
          <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Quality Starts Here"
            subheader="Nutrient-Rich, Natural Diets"
            left="left-14"
          />
          <div
            className={`${textFont.className} shadow-element-light relative mb-[4rem] mt-[11rem] box-content flex h-full w-3/4 flex-col justify-evenly bg-customWhite bg-opacity-30 p-9  leading-normal tracking-wide`}
          >
            {/* did adjust the content so that i could map over the content and display feeding card, but it had a glitch rendering the conditional classes, the second one wouldn't show the formatting */}
            <FeedingCard
              image={lukethornton}
              icon={suraang}
              text={feedingplan.contentOne}
            />
            <FeedingCard
              my="my-[3.5rem]"
              image={valdamaras}
              icon={injection}
              text={feedingplan.contentTwo}
            />
            <FeedingCard
              image={lukethornton}
              icon={freepik}
              text={feedingplan.contentThree}
            />
          </div>
        </div>
      </div>
      <FreeFrom />
    </div>
  );
}

// Grass-fed beef has a preferable,
// more robust flavor profile and it's typically higher in
// omega-3 fatty acids, vitamins, and antioxidants compared to
// grain-fed beef.{" "}
