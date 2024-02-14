"use client";
import { titleFont, textFont } from "../utils/fonts";
import { sendEmail } from "../actions/sendEmail";
import { POST } from "../api/send/route";
import { useFormState } from "react-dom";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

interface sendEmailFormState {
  errors: {
    message?: string[];
    phone?: string[];
    email?: string[];
    name?: string[];
    _form?: string[];
  };
  success?: boolean | null;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<sendEmailFormState>({
    errors: {},
    success: null,
  });

  const ref = useRef<HTMLFormElement | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);
  const [buttonStatus, setButtonStatus] = useState("Submit");

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setButtonStatus("...Sending");
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    //grab fields
    const name = formData.get("name");
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone");
    const message = formData.get("message");
    //check the integrity of the fields
    //must have either a phone or an email
    if (!phone && !email) {
      setFormState({
        errors: {
          phone: ["Please provide either an email or phone number"],
          email: ["Please provide either an email or phone number"],
        },
        success: false,
      });
      setButtonStatus("Submit");
      return;
    }

    if (!name) {
      setFormState({
        errors: {
          name: ["Please provide a name"],
        },
        success: false,
      });
      setButtonStatus("Submit");
      return;
    }

    //check for valid email
    if (email) {
      const emailPattern = /^\S+@\S+\.\S+$/;
      const isValidEmail = emailPattern.test(email);
      if (!isValidEmail) {
        setFormState({
          errors: {
            email: ["Please provide a valid email"],
          },
          success: false,
        });
        setButtonStatus("Submit");
        return;
      }
    }

    if (!message) {
      setFormState({
        errors: {
          message: ["Please write a message"],
        },
        success: false,
      });
      setButtonStatus("Submit");
      return;
    }

    //send the request
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        setFormState({ errors: {}, success: true });
        setButtonStatus("Submit");
      } else {
        const data = await res.json();
        setFormState({
          errors: {
            _form: [
              "Failed to send email. Please try again later or call or email JPEL directly",
            ],
          },
          success: false,
        });
        setButtonStatus("Submit");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormState({
        errors: { _form: ["Something went wrong..."] },
        success: false,
      });
      setButtonStatus("Submit");
    }
  };

  return (
    <>
      <div className=" flex h-[100%] flex-1 flex-col items-center justify-center bg-customDarkGreen">
        <form
          onSubmit={handleSubmit}
          ref={ref}
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
              {buttonStatus}
            </button>
          </div>
        </form>
      </div>

      {modal && <Modal success={success} setModal={setModal} />}
    </>
  );
}
