"use client";
import { titleFont, textFont } from "../utils/fonts";
import { sendEmail } from "../actions/sendEmail";
import { useFormState } from "react-dom";
import { useState } from "react";
import Modal from "./Modal";


export default function ContactForm() {
  const [formState, action] = useFormState(sendEmail, { errors: {} });
  const [modal, setModal] = useState<boolean>(true);

  return (
    <>
      <div className=" flex h-[100%] flex-1 flex-col items-center justify-center bg-customDarkGreen">
        <form
          action={action}
          className={`${textFont.className} flex h-full w-3/4 flex-col items-center justify-start`}
        >
          <h2
            className={`${titleFont.className} mt-5 text-4xl tracking-wide text-customLightGreen`}
          >
            Connect With Us
          </h2>
          <div className="flex h-3/4 w-full flex-col justify-evenly">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              required
              className="w-[100%]  bg-customWhite p-2 text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter a Valid Email"
              required
              className="w-[100%] bg-customWhite  p-2 text-black"
            />

            <input
              type="text"
              name="phone"
              placeholder="Enter a Phone Number"
              required
              className="w-[100%] bg-customWhite  p-2 text-black"
            />

            <textarea
              name="message"
              placeholder="Please tell us how we can help! (maximum 500 words)"
              required
              className="h-[200px] w-[100%] bg-customWhite p-2 text-black"
              maxLength={500}
              minLength={15}
            />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className={`${titleFont.className} w-full rounded-full bg-customBeige py-3 tracking-wide duration-200 hover:scale-105 active:scale-95 active:bg-opacity-50`}
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {modal && (
       <Modal setModal={setModal}/>
      )}
    </>
  );
}
