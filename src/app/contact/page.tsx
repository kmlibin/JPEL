import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { textFont, titleFont } from "../utils/fonts";
import ybagmedia from "../../../public/images/bruno.jpg";
import Header from "@/components/GreenHeader";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import lukethornton from "../../../public/images/lukethornton.jpg";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="justify-content flex h-[150vh] w-full flex-col items-center bg-customBeige bg-opacity-20 pt-[9rem]">
      <div className="h-[90%] w-[95%] ">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40 py-2">
          <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Want to Learn More?"
            subheader="Call, Email, or Fill Out The Form Below!"
            left="left-14"
          />

          {/* contact container */}
          <div className="shadow-element-light z-20 mb-7 mt-[11rem] flex h-[85%] w-[90%] items-start justify-center rounded">
            {/* contact info */}

            <div className="flex h-[100%] w-1/4 flex-col justify-start bg-customBeige p-4 pt-8 ">
              <div
                className={`${textFont.className} flex h-2/3 w-full flex-col items-start justify-start bg-customBeige pb-2 `}
              >
                <div className="mb-2 w-5/6  pl-3">
                  <span className="flex items-center">
                    <MdLocalPhone className="text-xl" />
                    <p className={`${titleFont.className} ml-2 text-xl`}>
                      CALL US
                    </p>
                  </span>
                  <p className="ml-2">1 (719) 123-1234</p>
                </div>
                <div className="mt-2 w-3/4  pl-3">
                  <span className="flex items-center">
                    <HiOutlineMail className="text-xl" />
                    <p className={`${titleFont.className} ml-2 text-xl`}>
                      EMAIL US
                    </p>
                  </span>
                  <p className="ml-2">email@email.com</p>
                </div>
                <div className="my-5 w-5/6  pl-3">
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
                <div className="mb-2 w-5/6  pl-3">
                  <span className=" flex items-center">
                    <FaFacebook className="text-xl" />
                    <p className={`${titleFont.className} ml-2 text-xl`}>
                      Find us on Facebook!
                    </p>
                  </span>
                </div>
                <div className="mt-8 flex w-full justify-center">
                  <Image
                    alt="cow"
                    height={250}
                    width={250}
                    src={lukethornton}
                    className="shadow-element-light"
                  />
                </div>
              </div>
            </div>

            {/* map */}
            <div className="flex h-full w-1/3 items-center">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5165486948417!2d-104.24904892446595!3d38.7977159717456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8712dfb665028991%3A0x755615a08a676d94!2s31550%20Sanborn%20Rd%2C%20Yoder%2C%20CO%2080864!5e0!3m2!1sen!2sus!4v1707166849261!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* contact form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
