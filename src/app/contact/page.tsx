import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { textFont, titleFont } from "../utils/fonts";
import ybagmedia from "../../../public/images/bruno.jpg";

export default function ContactPage() {
  return (
    <div className="justify-content flex h-[100vh] w-full flex-col items-center justify-end bg-customBeige bg-opacity-20">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        {/* <div className="absolute inset-0 top-[-12rem] h-[60%] w-full">
          <Image src={ybagmedia} fill alt="highlands cow" />
          <div className="absolute inset-0 bg-slate-800 bg-opacity-30"></div>
        </div> */}

        {/* <div className="absolute inset-0">
          <Image
            src={ybagmedia}
            fill
            style={{ objectFit: "cover" }}
            alt="highlands cow"
          />
          <div className="absolute inset-0 bg-slate-800 bg-opacity-30"></div>
        </div> */}

        {/* <div className="relative flex h-[90%] w-[100%] flex-col items-center justify-end"> */}
        <div className="absolute bottom-10 -z-[10] h-[90%] w-[95%] rounded border-2 border-customMediumGreen opacity-20"></div>

        <div className="flex h-[85%] w-[90%] rounded justify-center items-start">
          {/* contact info */}

          <div className="flex w-2/5 h-[100%] flex-col bg-customBeige  p-4">
            <div
              className={`${textFont.className} flex h-1/3 w-full flex-col items-start justify-start bg-customBeige pl-3 pb-2 `}
            >
              <div className="w-3/4 mb-2">
                <span className="flex items-center">
                  <MdLocalPhone className="text-xl" />
                  <p className={`${titleFont.className} ml-2 text-xl`}>
                    CALL US
                  </p>
                </span>
                <p className="ml-2">1 (719) 123-1234</p>
              </div>
              <div className="w-3/4 mb-2">
                <span className="flex items-center">
                  <MdLocalPhone className="text-xl" />
                  <p className={`${titleFont.className} ml-2 text-xl`}>
                    EMAIL US
                  </p>
                </span>
                <p className="ml-2">email@email.com</p>
              </div>
              <div className="w-3/4 mb-2">
                <span className=" flex items-center">
                  <FaLocationDot className="text-xl" />
                  <p className={`${titleFont.className} ml-2 text-xl`}>
                    LOCATION
                  </p>
                </span>
                <p className="ml-2">
                  31550 Sanborn Road, Yoder, Colorado 80864
                </p>
              </div>
            </div>

            <div className="flex h-2/3 w-full items-center">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5165486948417!2d-104.24904892446595!3d38.7977159717456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8712dfb665028991%3A0x755615a08a676d94!2s31550%20Sanborn%20Rd%2C%20Yoder%2C%20CO%2080864!5e0!3m2!1sen!2sus!4v1707166849261!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* contact form */}
          <div className=" flex h-[100%] flex-1 flex-col items-center justify-center bg-customDarkGreen">
            <form
              className={`${textFont.className} flex h-full w-3/4 flex-col items-center justify-start`}
            >
              <h2
                className={`${titleFont.className} mt-5 text-4xl tracking-wide text-customLightGreen`}
              >
                Have A Question?
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
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className={`${titleFont.className} w-full rounded-full bg-customBeige py-3`}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}
