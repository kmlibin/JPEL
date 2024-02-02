import Header from "@/components/GreenHeader";
import { titleFont, textFont } from "@/app/utils/fonts";
import Image from "next/image";
import dominicdrier from "../../../../public/images/dominicdrier.jpg";
import marceldutu from "../../../../public/images/marceldutu.jpg";
import stories from "../../../../public/images/stories.jpg";
export default function HistoryPage() {
  return (
    <div className="ustify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20">
      <div className="h-[90%] w-[95%]">
      <div className=" top-0 h-[350px] w-[100%] overflow-hidden">
          <Image
            src={dominicdrier}
            alt="cow"
            className="shadow-element mt-[-20px]"
          />
        </div>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
                <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div>
        <Header
          header="The Rich History of Highland Cattle"
          left="left-14"
        />
  
        {/* //text content cards */}
        <div className="w-5/6 flex my-[4rem] flex-col justify-center items-center bg-customLightGreen bg-opacity-20 box-content ">
        <div className="mt-[4rem] flex h-full w-5/6 items-center justify-evenly">
          <div
            className={`${textFont.className} flex w-[55%] flex-col items-center justify-start text-xl`}
          >
            <p className="tracking-wide">
              Deeply ingrained in the rugged Scottish Highlands for centuries,
              the Highland Cow underwent a rigorous natural selection process,
              where only the fittest and most adaptable individuals endured the
              harsh conditions to carry forth the breed's legacy. Originally
              classified into two distinct classes, the smaller black Kyloe and
              the larger red or black Highlander, these strains now amalgamate
              into a single recognized breed known as Highland.
            </p>
            <div
              className={` my-8 flex w-[60%] items-center justify-center pl-3 text-2xl  italic`}
              style={{ borderLeft: "4px solid #475E41" }}
            >
              <p>
                With archaeological evidence dating back to the early days and
                written records from the 12th century, Highland Cattle have not
                only weathered the test of time but have also played integral
                roles in the livelihoods and traditions of the Scottish people
              </p>
            </div>
            <p className="tracking-wide">
              In the 18th-century Scottish economy, these cattle played a
              pivotal role, with thousands traversing the country's landscapes
              for markets like Falkirk and Crieff. Queen Victoria's preference
              for the red-colored cattle led to selective breeding, influencing
              their predominant hue today.
            </p>
          </div>
          <div className="w-[40%]">
            <Image src={marceldutu} alt="cow" objectFit="cover" />
          </div>
        </div>

        {/* //text block */}
        <div className="mt-[4rem] w-[81%]">
          <h3 className={`${titleFont.className} mt-[-1rem] text-3xl`}>
            More about Highland Cattle
          </h3>
          <p className={`${textFont.className} mt-4 text-xl tracking-wide`}>
            Deeply ingrained in the rugged Scottish Highlands for centuries, the
            Highland Cow underwent a rigorous natural selection process, where
            only the fittest and most adaptable individuals endured the harsh
            conditions to carry forth the breed's legacy. Originally classified
            into two distinct classes, the smaller black Kyloe and the larger
            red or black Highlander, these strains now amalgamate into a single
            recognized breed known as Highland.
          </p>
        </div>

        {/* text two */}
        <div className="mt-[1rem] flex h-full w-5/6 items-center justify-evenly">
          <div className="w-[40%]">
            <Image src={stories} alt="cow" />
          </div>
          <div
            className={`${textFont.className} flex w-[55%] flex-col items-center justify-start text-xl`}
          >
            <p className="tracking-wide">
              The breed's global significance extends beyond its historical
              roots. Highland Cattle exhibit remarkable versatility in
              agricultural practices, excelling in harsh climates and
              contributing not only to premium beef but also to milk production
              and cross-breeding initiatives.
            </p>
            <div
              className={` my-8 flex w-[60%] items-center justify-center pl-3 text-2xl  italic`}
              style={{ borderLeft: "4px solid #475E41" }}
            >
              <p>
                Highland beef is renowned for its lower fat and cholesterol
                content compared to other beef breeds, even surpassing chicken
                in certain aspects. The meat's fine texture, succulent flavor,
                and high protein content make it a premium choice in the
                culinary world
              </p>
            </div>
            <p className="tracking-wide">
              Their distinctive double coat, featuring a long, coarse outer
              layer and a soft wooly undercoat, serves as natural insulation,
              reducing the necessity for shelter and emphasizing their enduring
              resilience. Beyond their physical characteristics, Highland Cattle
              are integral to light grazing practices, promoting environmental
              sustainability and garnering international recognition for their
              adaptability. The slow maturation of Highland cattle contributes
              to meat that is tender, flavorful, and succulent. In a study
              conducted at the Manyberries Research Station in Canada, Highland
              beef surpassed other breeds in terms of tenderness and taste.
              Comparisons with Hereford cattle revealed that the Highland group
              produced 2000 pounds more beef, while Highland/Hereford crosses
              outperformed purebred Herefords by 6000 pounds.
            </p>
          </div>
        </div>

        {/* //text block */}
        <div className="my-5 flex w-5/6 flex-col items-end pb-[6rem]">
          <h3 className={`${titleFont.className} mt-[-1rem] text-3xl`}>
            Highland Cattle Around the World
          </h3>
          <p className={`${textFont.className} mt-4 text-xl tracking-wide`}>
            With a robust population of over 40,000 reported worldwide, Highland
            cattle have become a symbol of adaptability and resilience. They
            thrive in diverse climates and landscapes, from the cold winters of
            Norway to the sweeping pastures of Canada. Revered for their
            exceptional beef quality, lean meat, and unique grazing abilities,
            Highland cattle continue to play a significant role in agricultural
            practices globally. As they graze and thrive in various
            environments, these "Hairy Coos" have not only preserved their rich
            Scottish heritage but have also become valued contributors to
            sustainable agriculture and effective range management worldwide
          </p>
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
