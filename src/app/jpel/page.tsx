"use client";
import Image from "next/image";
import narrow from "../../../public/images/narrow1.jpg";
import Valdamaras from "../../../public/images/ValdamarasD.jpg";
import Header from "@/components/GreenHeader";
import stories from "../../../public/images/stories.jpg";
import { textFont, titleFont } from "../utils/fonts";
import { Slide } from "react-awesome-reveal";
import line from "../../../public/images/line.png";

export default function AboutPage() {
  return (
    <div className="justify-content relative flex h-full w-full flex-col items-center bg-customBeige bg-opacity-20 pb-4 pt-[9rem]">
      <div className="h-[90%] w-[95%]">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40">
          <div className=" absolute my-auto h-[97%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Welcome to JPEL Farms"
            subheader="A Local and Sustainable Ranch"
            left="left-14"
          />
          <Slide direction="right" className="flex flex-col items-center justify-center">
            <div
              className={`${textFont.className} shadow-element-light relative mb-[4rem] mt-[11rem] box-content w-3/4  bg-customLightGreen bg-opacity-30 p-9 text-2xl leading-normal tracking-wide`}
            >
              {/* images */}
              <div
                className={`${textFont.className}  shadow-element float-right ml-4 mr-[-5rem] flex flex-col items-center border-4 border-customBeige bg-customBrown p-4 text-customBeige`}
              >
                <Image
                  className="shadow-element h-[400px] w-[400px] rounded"
                  src={Valdamaras}
                  alt="weight lifter"
                />
                <p className="max-w-[400px] py-2 text-center text-xl italic text-customBeige opacity-70">
                  caption goes here
                </p>
                <Image
                  className="shadow-element  h-[400px] w-[400px] rounded"
                  src={Valdamaras}
                  alt="weight lifter"
                />
                <p className="max-w-[400px] py-2 text-center text-xl italic text-customBeige opacity-70">
                  a much much much longer caption here, it even takes up two
                  lines!
                </p>
                <Image
                  className="shadow-element h-[400px] w-[400px] rounded"
                  src={Valdamaras}
                  alt="weight lifter"
                />
                <p className="max-w-[400px] py-2 text-center text-xl italic text-customBeige opacity-70">
                  caption goes here
                </p>
              </div>

              {/* text */}
              <div className="w-2/3 ">
                {/* <h2 className={`${titleFont.className} px-4 pt-2 text-4xl`}>
                Meet John and Peggy
              </h2>
              <hr className=" mb-8 mt-2 w-2/3 border-b border-customMediumGreen opacity-20"></hr> */}
                <p className="mb-2 mt-5 px-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Nec tincidunt praesent semper feugiat. Eu nisl nunc mi ipsum
                  faucibus. Aliquam faucibus purus in massa tempor nec feugiat
                  nisl. Enim ut tellus elementum sagittis vitae et leo. Massa
                  eget egestas purus viverra accumsan. Massa sed elementum
                  tempus egestas sed sed risus pretium. Velit ut tortor pretium
                  viverra suspendisse potenti nullam ac. Auctor eu augue ut
                  lectus arcu bibendum at. In nulla posuere sollicitudin aliquam
                  ultrices sagittis orci a. Consequat ac felis donec et odio
                  pellentesque diam. Non diam phasellus vestibulum lorem sed
                  risus ultricies. Dui nunc mattis enim ut tellus. Rhoncus est
                  pellentesque elit ullamcorper dignissim.
                </p>
                <img src={line.src} alt="line" className="mb-3 w-3/4" />
                {/* <hr className=" my-8 w-2/3 border-b border-customMediumGreen opacity-20"></hr> */}
                <p>
                  Sed arcu non odio euismod lacinia at quis risus. Faucibus et
                  molestie ac feugiat sed. Duis at consectetur lorem donec massa
                  sapien faucibus et molestie. Et magnis dis parturient montes
                  nascetur ridiculus mus mauris vitae. Sem viverra aliquet eget
                  sit. Mus mauris vitae ultricies leo integer malesuada nunc.
                  Maecenas sed enim ut sem viverra aliquet eget sit. Purus sit
                  amet luctus venenatis. Malesuada pellentesque elit eget
                  gravida cum sociis natoque. Senectus et netus et malesuada
                  fames ac turpis egestas. Convallis convallis tellus id
                  interdum velit laoreet id donec ultrices. Ultrices tincidunt
                  arcu non sodales.
                </p>
                <hr className=" my-8 w-2/3 border-b border-customMediumGreen opacity-20"></hr>
                <p>
                  Lacus sed viverra tellus in hac habitasse platea. Non enim
                  praesent elementum facilisis leo vel fringilla. Eros donec ac
                  odio tempor orci dapibus. Dolor sit amet consectetur
                  adipiscing elit duis tristique. Ultricies mi eget mauris
                  pharetra et. Amet nulla facilisi morbi tempus. Posuere lorem
                  ipsum dolor sit amet consectetur. Lacinia quis vel eros donec
                  ac odio tempor orci dapibus. Id diam maecenas ultricies mi
                  eget mauris pharetra et. Placerat vestibulum lectus mauris
                  ultrices eros in. A iaculis at erat pellentesque adipiscing.
                  Proin sed libero enim sed faucibus.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
