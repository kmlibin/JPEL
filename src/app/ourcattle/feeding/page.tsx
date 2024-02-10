import Header from "@/components/GreenHeader";

import FeedingCard from "./FeedingCard";
import feedingplan from "../../../content/OurCattleContent/feedingplan";
import FreeFrom from "../../../components/FreeFrom/FreeFrom";

export default function FeedingPage() {
  return (
    <div className="justify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20 pt-[9rem] ">
      <div className="h-[90%] w-[95%]">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40">
          <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Our Committment to Quality"
            subheader="Nutrient-Rich, Natural Diets"
            left="left-14"
          />

          {/* <div
            className={`${textFont.className} shadow-element-light relative mb-[4rem] mt-[11rem] box-content flex h-full w-3/4 flex-col justify-evenly bg-customWhite bg-opacity-30 p-9  leading-normal tracking-wide`}
          > */}
          {/* //TODO put all (icons and images) into content file and map over */}
          {feedingplan.map((item) => (
            <FeedingCard
              icon={item.icon}
              image={item.img}
              mb={item.mb}
              mt={item.mt}
              my={item.my}
              header={item.header}
              text={item.text}
              alt={item.alt}
            />
          ))}
          {/* </div> */}
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
