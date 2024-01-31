import Image from "next/image";
import Link from "next/link";
import seregy2 from "../../../public/images/seregy2.jpg";
import beefposter from "../../../public/images/beefposter.png";
import { titleFont, textFont } from "../utils/fonts";

export default function FarmBeef() {
  return (
    <div className="justify-content flex min-h-[100vh] min-w-[100%] flex-col items-center bg-customBrown bg-opacity-20">
      <div className="h-[90%] w-[95%]">
        <div className="relative h-[350px] w-[100%] overflow-hidden">
          <Image
            src={seregy2}
            alt="cow"
            className="shadow-element mt-[-20px]"
          />
        </div>

        {/* header */}

        <div className="relative flex w-full items-center justify-center ">
          <div
            className={`${titleFont.className} shadow-element absolute  top-[-1rem]  flex  flex-col items-center bg-customDarkGreen p-9 text-5xl text-customWhite`}
          >
            <h2 className="text-center">
              Elevating Taste: The Highland Beef Experience
            </h2>
            <h5
              className={`${textFont.className} mt-2 w-[full] text-center text-lg tracking-wide text-customLightGreen opacity-90`}
            >
              Why JPEL Farm's Beef is a Class Above the Rest
            </h5>
          </div>

          <hr className=" border-b border-customMediumGreen opacity-20"></hr>

          {/* 3 content divs */}
          <div className="mx-2 mt-[12rem] flex w-full flex-col items-center justify-center gap-4">
            <hr className="w-[70%] border-b border-customMediumGreen opacity-20 mb-10"></hr>

            <div className="flex w-full items-stretch justify-center gap-4">
              <div className=" shadow-element flex flex-1 items-stretch justify-end rounded bg-customMediumGreen p-2">
                <div className="h-[100%] w-[27%]">
                  <p className={`${textFont.className} px-5 text-[200px]`}>1</p>
                </div>
                <div className=" shadow-element flex h-full w-[70%] flex-col items-start justify-start rounded bg-customWhite bg-opacity-50 px-3 pb-1">
                  <h3
                    className={`${titleFont.className} m-2 border-b-2 border-customDarkGreen border-opacity-50 text-4xl  leading-snug`}
                  >
                    Natural Farming
                  </h3>
                  <ul className={`${textFont.className} text-xl`}>
                    <li className="m-1">
                      <span className="font-bold">
                        Organic and Pesticide Free:
                      </span>{" "}
                      JPEL Farms follows organic practices, ensuring that their
                      Highland Cattle are raised without pesticides and harmful
                      chemicals.
                    </li>
                    <br></br>
                    <li className="m-1">
                      <span className="font-bold">Grass-Fed Lifestyle:</span>{" "}
                      The cattle lead a natural and healthy life, freely grazing
                      on grass, resulting in high-quality beef. The cattle's
                      natural grazing habits enhance the flavor of the beef,
                      making Highland cattle the preferred choice for producing
                      specialist beef.
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" shadow-element flex flex-1 items-stretch justify-between rounded bg-customMediumGreen p-2">
                <div className="h-[100%] w-[27%]">
                  <p className={`${textFont.className} px-5 text-[200px]`}>2</p>
                </div>
                <div className="shadow-element flex w-[70%] flex-col items-start justify-start rounded bg-customWhite bg-opacity-50 px-3 pb-1">
                  <h3
                    className={`${titleFont.className} m-2 border-b-2 border-customDarkGreen border-opacity-50 text-4xl  leading-snug`}
                  >
                    Distinctive Traits
                  </h3>
                  <ul className={`${textFont.className} text-xl`}>
                    <li className="m-1">
                      <span className="font-bold">Slow Maturing and Lean:</span>{" "}
                      Highland Beef is known for being slow-maturing, lean,
                      firm, and low in fat.
                    </li>
                    <br></br>
                    <li className="m-1">
                      <span className="font-bold">
                        Rich in Protein and Iron:
                      </span>{" "}
                      Despite its leanness, Highland Beef is rich in protein and
                      iron, contributing to flavor, tenderness, and juiciness.
                    </li>
                    <br></br>
                    <li className="m-1">
                      <span className="font-bold">
                        Versatile Cooking Methods:
                      </span>{" "}
                      The meat's marbling allows it to excel in a variety of
                      cooking methods and recipes.
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" shadow-element flex h-full flex-1 items-stretch justify-between rounded bg-customMediumGreen p-2">
                <div className="flex h-[100%] w-[27%]">
                  <p className={`${textFont.className} px-5 text-[200px] `}>
                    3
                  </p>
                </div>
                <div className="shadow-element flex h-full w-[70%] flex-col items-start justify-start rounded bg-customWhite bg-opacity-50 px-3 pb-1">
                  <h3
                    className={`${titleFont.className} m-2 border-b-2 border-customDarkGreen border-opacity-50 text-4xl leading-snug`}
                  >
                    Health Benefits
                  </h3>
                  <ul className={`${textFont.className} text-xl`}>
                    <li className="m-1">
                      <span className="font-bold">Nutrient-Rich Profile:</span>{" "}
                      Highland Beef is low in total fat, low in cholesterol, and
                      high in protein, making it a nutritious choice.
                    </li>
                    <br></br>
                    <li className="m-1">
                      <span className="font-bold">Omega Fatty Acids:</span> It
                      has higher levels of beneficial omega-3 fatty acids and
                      lower levels of omega-6, contributing to heart health.
                    </li>
                    <br></br>
                    <li className="m-1">
                      <span className="font-bold">Vitamins and Minerals:</span>{" "}
                      Packed with essential nutrients such as vitamins A, E,
                      B12, niacin, vitamin B6, phosphorus, zinc, and selenium,
                      providing various health benefits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="w-[70%] border-b border-customMediumGreen opacity-20 mt-10"></hr>
          </div>
        </div>

        <div className="mt-[10%] flex">
          <div className="w-2/3">
            <Image src={beefposter} alt="cow" />
          </div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
