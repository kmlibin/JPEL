import Header from "@/components/GreenHeader";
import { textFont, titleFont } from "@/app/utils/fonts";
import Image from "next/image";
import lukethornton from "../../../../public/images/lukethornton.jpg";
import suraang from "../../../../public/images/suraang.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function FeedingPage() {
  return (
    <div className="justify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20 pt-[9rem]">
      <div className="h-[90%] w-[95%]">
        <div className="relative flex h-full w-full flex-col items-center justify-start bg-customBeige bg-opacity-40 pt-4">
          <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-20"></div>
          <Header
            header="Natural Nutrition"
            subheader="Nutrient-Rich and Natural Diets"
            left="left-14"
          />

          <div
            className={`${textFont.className} shadow-element-light relative mb-[4rem] mt-[11rem] box-content flex w-3/4 flex-col  bg-customWhite bg-opacity-30 p-9  leading-normal tracking-wide`}
          >
            <div className="flex w-full items-stretch">
              <div className="h-full w-1/2">
                <Image alt="cow" src={lukethornton} className="min-h-full" />
              </div>

              <div className=" relative flex w-1/2 items-stretch justify-start bg-customBrown bg-opacity-10">
                <div className="flex w-3/4 flex-col items-center justify-center bg-slate-400 p-4 text-center">
                  <Image src={suraang} alt="corn" height={100} width={100} />
                  <h3 className={`${titleFont.className} text-3xl`}>
                    No Corn or Soy
                  </h3>
                  <p className="w-3/4 py-4">
                    Feeding corn or soy to cattle deviates from their natural
                    diet, which can affect their health and wellbeing. It also
                    makes for poorer quality beef. Corn and soy can also contain
                    residues of pesticides and herbicides, and you don't want
                    that in your beef!
                  </p>
                </div>
                <div className="absolute right-[-2rem] top-9 h-full">
                  <FaArrowLeft className="text-9xl text-customBrown opacity-90" />
                </div>
              </div>
            </div>


            <div className="flex w-full items-stretch my-[3rem]">
              <div className="h-full w-1/2">
                <Image alt="cow" src={lukethornton} className="min-h-full" />
              </div>

              <div className=" relative flex w-1/2 items-stretch justify-start bg-customBrown bg-opacity-10">
                <div className="flex w-3/4 flex-col items-center justify-center bg-slate-400 p-4 text-center">
                  <Image src={suraang} alt="corn" height={100} width={100} />
                  <h3 className={`${titleFont.className} text-3xl`}>
                    No Corn or Soy
                  </h3>
                  <p className="w-3/4 py-4">
                    Feeding corn or soy to cattle deviates from their natural
                    diet, which can affect their health and wellbeing. It also
                    makes for poorer quality beef. Corn and soy can also contain
                    residues of pesticides and herbicides, and you don't want
                    that in your beef!
                  </p>
                </div>
                <div className="absolute right-[-2rem] top-9 h-full">
                  <FaArrowLeft className="text-9xl text-customBrown opacity-90" />
                </div>
              </div>
            </div>

            <div className="flex w-full items-stretch">
              <div className="h-full w-1/2">
                <Image alt="cow" src={lukethornton} className="min-h-full" />
              </div>

              <div className=" relative flex w-1/2 items-stretch justify-start bg-customBrown bg-opacity-10">
                <div className="flex w-3/4 flex-col items-center justify-center bg-slate-400 p-4 text-center">
                  <Image src={suraang} alt="corn" height={100} width={100} />
                  <h3 className={`${titleFont.className} text-3xl`}>
                    No Corn or Soy
                  </h3>
                  <p className="w-3/4 py-4">
                    Feeding corn or soy to cattle deviates from their natural
                    diet, which can affect their health and wellbeing. It also
                    makes for poorer quality beef. Corn and soy can also contain
                    residues of pesticides and herbicides, and you don't want
                    that in your beef!
                  </p>
                </div>
                <div className="absolute right-[-2rem] top-9 h-full">
                  <FaArrowLeft className="text-9xl text-customBrown opacity-90" />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

// Grass-fed beef has a preferable,
// more robust flavor profile and it's typically higher in
// omega-3 fatty acids, vitamins, and antioxidants compared to
// grain-fed beef.{" "}
