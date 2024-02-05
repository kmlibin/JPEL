import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { textFont, titleFont } from "../utils/fonts";

export default function ContactPage() {
  return (
    <div className="ustify-content relative flex h-[100vh] w-full flex-col items-center bg-customBeige bg-opacity-20">
      <div className="relative flex h-[90%] w-[95%] flex-col items-center justify-end">
        {/* <div className=" top-0 h-[350px] w-[100%] overflow-hidden">
            <Image
              src={narrowone}
              alt="cow"
              className="shadow-element mt-[-90px] w-[100%]"
            />
          </div> */}
        {/* <div className=" absolute my-auto h-[97%] w-[100%] rounded  border-2 border-customMediumGreen opacity-20"></div> */}

        <div className="flex h-3/4 w-2/3 bg-customLightGreen bg-opacity-70">
          {/* contact info */}
          <div
            className={`${textFont.className} flex h-full flex-1 flex-col items-center justify-evenly `}
          >
            <div className="w-3/4">
              <span className="flex items-center">
                <MdLocalPhone />
                <p className={`${titleFont.className} ml-2`}>CALL US</p>
              </span>
              <p>1 (719) 123-1234</p>
            </div>
            <div className="w-3/4">
              <span className="flex items-center">
                <MdLocalPhone />
                <p className={`${titleFont.className} ml-2`}>EMAIL US</p>
              </span>
              <p>email@email.com</p>
            </div>
            <div className="w-3/4">
              <span className="flex items-center">
                <FaLocationDot />
                <p className={`${titleFont.className} ml-2`}>LOCATION</p>
              </span>
              <p>31550 Sanborn Road, Yoder, Colorado 80864</p>
            </div>
            <div className="h-1/2 w-5/6">
              <iframe
                className="h-full w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.5165486948417!2d-104.24904892446595!3d38.7977159717456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8712dfb665028991%3A0x755615a08a676d94!2s31550%20Sanborn%20Rd%2C%20Yoder%2C%20CO%2080864!5e0!3m2!1sen!2sus!4v1707166849261!5m2!1sen!2sus"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          {/* contact form */}
          <div className="flex-1">
            <div className="w-full">
              <p>Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
