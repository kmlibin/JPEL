"use client";
import { titleFont, textFont } from "../utils/fonts";
import { sendEmail } from "../actions/sendEmail";
import { useFormState } from "react-dom";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

export default function ContactForm() {
  const [formState, action] = useFormState(sendEmail, {
    errors: {},
    success: null,
  });
  const ref = useRef<HTMLFormElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);

  //pop up for formState
  useEffect(() => {
    if (formState.success) {
      ref.current?.reset();
      setSuccess(true);
      setModal(true);
    }
    if (formState.success !== null && formState.success !== true) {
      setSuccess(false);
      setModal(true);
    }
  }, [formState]);

  return (
    <>
      <div className=" flex h-[100%] flex-1 flex-col items-center justify-center bg-customDarkGreen">
        <form
          ref={ref}
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
            {formState.errors.name ? (
              <div className="rounded border border-red-400 bg-red-200 p-2">
                {formState.errors.name?.join(", ")}
              </div>
            ) : null}

            <input
              type="email"
              name="email"
              placeholder="Enter a Valid Email"
              className="w-[100%] bg-customWhite  p-2 text-black"
            />
            {formState.errors.email ? (
              <div className="rounded border border-red-400 bg-red-200 p-2">
                {formState.errors.email?.join(", ")}
              </div>
            ) : null}
            <input
              type="text"
              name="phone"
              placeholder="Enter a Phone Number"
              className="w-[100%] bg-customWhite  p-2 text-black"
            />
            {formState.errors.phone ? (
              <div className="rounded border border-red-400 bg-red-200 p-2">
                {formState.errors.phone?.join(", ")}
              </div>
            ) : null}
            <textarea
              name="message"
              placeholder="Please tell us how we can help! (maximum 500 words)"
              required
              className="h-[200px] w-[100%] bg-customWhite p-2 text-black"
              maxLength={500}
              minLength={15}
            />
            {formState.errors.message ? (
              <div className="rounded border border-red-400 bg-red-200 p-2">
                {formState.errors.message?.join(", ")}
              </div>
            ) : null}
          </div>
          {formState.errors._form ? (
            <div className="mb-2 rounded border border-red-400 bg-red-200 p-2">
              {formState.errors._form?.join(", ")}
            </div>
          ) : null}
          <div className="mb-2 w-full">
            <button
              type="submit"
              className={`${titleFont.className} w-full rounded-full bg-customBeige py-3 tracking-wide duration-200 hover:scale-105 active:scale-95 active:bg-opacity-50`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {modal && <Modal success={success} setModal={setModal} />}
    </>
  );
}
