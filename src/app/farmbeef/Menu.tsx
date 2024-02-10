import React from 'react'
import Image from 'next/image'
import supportlocal from '../../../public/images/supportlocal.png'
import JPELlabel from '../../../public/images/JPELlabel.svg'
import {cutsAndPrices} from '@/content/BuyBeefContent/buybeefcontent'
import { titleFont, textFont } from '../utils/fonts'

const Menu = () => {
  return (
    <div className="mt-[6%] flex w-full flex-col items-center">
    <div className="shadow-element flex w-[80%] items-center justify-center rounded bg-customBrown bg-opacity-30">
      <div className=" shadow-element-light justify-content relative my-[1.5%] flex w-[97%]  items-center justify-center rounded bg-customWhite p-12">
        <div className="absolute bottom-10 right-10 flex h-[140px] w-[140px] items-center  justify-center rounded-full bg-[#F4ECE4]">
          <img
            src={supportlocal.src}
            className="min-h-[190px] min-w-[190px]"
          />
        </div>
        <div className=" flex h-full w-full items-center justify-center">
          {/* <div className="absolute top-[0] left-[15%] flex h-[140px] w-[140px] items-center justify-center rounded-full border-2 border-customBrown bg-[#F4ECE4]">
            <img src={usda.src} className="" />
          </div> */}
          <div className=".newwidths mr-2 flex justify-start sm:w-1/2 lg:w-2/3">
            <Image src={JPELlabel} alt="cow" className="h-auto w-[650px]" />
          </div>
          <div className=" shadow-element newwidths box-content flex h-[100%] w-1/3 flex-col items-center justify-center rounded bg-customDarkGreen p-2">
            <div className="flex h-full w-full flex-col items-center justify-center rounded bg-customLightGreen bg-opacity-90 p-6">
              <h4 className={`${titleFont.className} mb-4 text-2xl`}>
                The Menu at JPEL:
              </h4>
              <ul
                className={`${titleFont.className} shadow-element-light w-full rounded bg-customWhite bg-opacity-50 p-4 text-xl leading-normal tracking-wide`}
              >
                {cutsAndPrices.map(({ cut, price }) => (
                  <li key={cut}>
                    <strong>{cut}:</strong>&nbsp;{" "}
                    <span className={`${textFont.className}`}>{price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-col items-start">
                <p className={`${textFont.className}`}>
                  *We have many more cuts for purchase, please call for
                  availability
                </p>
                <p className={`${textFont.className} mt-2`}>
                  *Prices are subject to change
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu