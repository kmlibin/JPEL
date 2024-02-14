'use client'

import Image from "next/image";

import { textFont } from "../utils/fonts";
import {Slide} from 'react-awesome-reveal'
import Header from "@/components/GreenHeader";

import lukethornton from "../../../public/images/lukethornton.jpg";
import ContactForm from "./ContactForm";
import contactContent from "@/content/Contact/contact";
import Tags from "./Tags";
export default function ContactPage() {
  return (
    <div className="justify-content flex h-[150vh] w-full flex-col items-center justify-end bg-customBeige bg-opacity-20 pb-4">
      <div className="h-[90%] w-[95%] ">
        <div className="relative flex h-full w-full flex-col items-center justify-center bg-customBeige bg-opacity-40 py-2">
          <div className=" absolute my-auto h-[95%] w-[97%] rounded  border-2 border-customMediumGreen opacity-40"></div>
          <Header
            header="Want to Learn More?"
            subheader="Call, Email, or Fill Out The Form Below!"
            left="left-14"
          />

          {/* contact container */}
          <Slide direction="right" className="w-full flex justify-center h-[90%] mb-[3rem] items-center">
          <div className="shadow-element-light z-20  mt-[11rem] flex h-[85%] w-[90%] items-start justify-center rounded">
            {/* contact info */}

            <div className="flex h-[100%] w-1/4 flex-col justify-start bg-customBeige p-4 pt-8 ">
              <div
                className={`${textFont.className} flex h-2/3 w-full flex-col items-start justify-start bg-customBeige pb-2 `}
              >
                {/* phone,email,location, FB */}
                {contactContent.map((item) => (
                  <Tags
                    key={item.header}
                    icon={item.icon}
                    header={item.header}
                    content={item.content}
                  />
                ))}

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
    </Slide>
        </div>
      </div>
    </div>
  );
}
