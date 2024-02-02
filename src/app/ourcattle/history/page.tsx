import Header from "@/components/GreenHeader";
import { titleFont, textFont } from "@/app/utils/fonts";
import Image from "next/image";
import narrowone from "../../../../public/images/jnarrow.jpg";
import marceldutu from "../../../../public/images/marceldutu.jpg";
import stories from "../../../../public/images/stories.jpg";
import history from "@/content/OurCattleContent/history.js";
export default function HistoryPage() {
  return (
    <div className="ustify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20">
      <div className="h-[90%] w-[95%]">
        <div className=" top-0 h-[350px] w-[100%] overflow-hidden">
          <Image
            src={narrowone}
            alt="cow"
            className="shadow-element mt-[-20px] w-[100%]"
          />
        </div>
        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div>
          <Header header="A Rich History of Highland Cattle" subheader="The World's Oldest Registered Cattle Breed"left="left-14" />

          {/* //text content cards */}
          <div
            className={`${textFont.className} shadow-element-light mb-[4rem] mt-[11rem] box-content w-3/4 bg-customLightGreen bg-opacity-20 p-9 text-2xl leading-normal tracking-wide`}
          >
            <h2 className={`${titleFont.className} px-4 text-4xl`}>
              {history.headerOne}
            </h2>
            <hr className=" mt-2 mb-8 border-b border-customMediumGreen opacity-20"></hr>

            <div>
              <Image
                className="float-right mb-4 ml-8"
                src={marceldutu}
                alt="weight lifter"
                height={600}
              />

              <p className="my-5 px-4">{history.contentZero}</p>

              <div className="my-10 flex flex-col items-center">
                <p
                  className={`box-content w-[70%] pl-4 text-3xl italic`}
                  style={{ borderLeft: "4px solid #475E41" }}
                >
                  {history.factOne}
                </p>
              </div>
              <p className="my-5 px-4">{history.contentOne}</p>

              <h2 className={`${titleFont.className} px-4 pt-8 text-4xl`}>
                {history.headerTwo}
              </h2>
              <hr className=" mt-2 border-b border-customMediumGreen opacity-20 mb-8"></hr>
              <p className="my-5 px-4">{history.contentTwo}</p>

              <Image
                className="float-left  mr-8"
                src={stories}
                alt="group of runners"
                height={600}
              />
              <h2 className={`${titleFont.className} px-4 text-4xl pt-8`}>
                {history.headerThree}
              </h2>
              <hr className=" mt-2 border-b border-customMediumGreen opacity-20 mb-8"></hr>
              <p className="my-5 px-4">{history.contentThree}</p>

              <div className="my-10 flex flex-col items-center">
                <p
                  className={`box-content w-[70%] pl-4 text-3xl italic`}
                  style={{ borderLeft: "4px solid #475E41" }}
                >
                  {history.factTwo}
                </p>
              </div>
              <p className="my-5 px-4">{history.contentFour}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// header: string,
// subheader?: string,
// top?: string,
// left?: string,
// ml?: string
// translatex?: string
// transform?: string
