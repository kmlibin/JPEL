'use client' 
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { textFont, titleFont } from '@/app/utils/fonts'
import Image from 'next/image'
import marceldutu from '../../../../public/images/marceldutu.jpg'
import stories from '../../../../public/images/stories.jpg'

interface HistoryPostProps {
    history: {
        headerOne: string;
        headerTwo: string;
        headerThree: string;
        contentZero: string;
        contentOne: string;
        contentTwo: string;
        contentThree: string;
        contentFour: string;
        factOne: string;
        factTwo: string;
    }
}
const HistoryPost = ({history}: HistoryPostProps) => {
  return (
    <Slide
    direction="right"
    className="flex flex-col items-center justify-center"
  >
    <div
      className={`${textFont.className} shadow-element-light mb-[4rem] mt-[11rem] box-content w-3/4 bg-customLightGreen bg-opacity-30 p-9 text-2xl leading-normal tracking-wide`}
    >
      <h2 className={`${titleFont.className} px-4 text-4xl`}>
        {history.headerOne}
      </h2>
      <hr className=" mb-8 mt-2 border-b border-customMediumGreen opacity-20"></hr>
      <div>
        <Image
          className="shadow-element float-right mb-4 ml-8 rounded"
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
        <hr className=" mb-8 mt-2 border-b border-customMediumGreen opacity-20"></hr>
        <p className="my-5 px-4">{history.contentTwo}</p>

        <Image
          className="shadow-element float-left mr-8 rounded"
          src={stories}
          alt="group of runners"
          height={600}
        />
        <h2 className={`${titleFont.className} px-4 pt-8 text-4xl`}>
          {history.headerThree}
        </h2>
        <hr className=" mb-8 mt-2 border-b border-customMediumGreen opacity-20"></hr>
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
  </Slide>
  )
}

export default HistoryPost