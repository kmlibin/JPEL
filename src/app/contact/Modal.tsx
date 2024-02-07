import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoIosCloseCircle } from "react-icons/io";
import { titleFont, textFont } from "../utils/fonts";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ setModal }: ModalProps) {
  return (
    <div className="fixed top-0 flex h-[100%] w-[100%] items-center justify-center bg-slate-600 bg-opacity-75">
      <div className="shadow-element flex h-2/5 w-1/4 flex-col items-center justify-center  bg-slate-600">
        <div className="relative flex h-2/5 w-full items-center justify-center bg-customMediumGreen">
          <IoIosCloseCircle
            onClick={() => setModal(false)}
            className="absolute right-[-10px] top-[-10px] rounded-full bg-customBeige text-customDarkGreen text-xl duration-200 hover:scale-110 hover:cursor-pointer"
          />
          <IoCheckmarkCircleOutline className="py-4 text-9xl text-customWhite" />
        </div>
        <div className="flex h-3/5 w-full flex-col items-center justify-evenly bg-customWhite">
          <h2 className={`${titleFont.className} text-3xl`}>Thanks!</h2>
          <p className={`${textFont.className} w-3/4 text-center text-xl`}>
            Your message has been sent. We will respond as soon as we can!
          </p>
          <button
            onClick={() =>setModal(false)}
            className={`${titleFont.className} w-1/2 rounded-full bg-customBeige py-2 tracking-wide duration-200 hover:scale-105 active:scale-95`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
