import { BsFacebook } from "react-icons/bs";
import smallerlogo from "../../public/images/logo3.png";
import Image from "next/image";
import { LiaHatCowboySideSolid } from "react-icons/lia";
import { titleFont, textFont } from "@/app/utils/fonts";
import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className=" box-content flex bg-customBeige bg-opacity-10 border-t-2 border-customBrown border-opacity-10">
      <div className="w-1/6  pl-4 py-3">
        <Image src={smallerlogo} alt="logo" height={100} width={100} />
      </div>

      {/* text */}
      <div
        className={` ${textFont.className} flex w-4/5 flex-col items-start justify-end py-5`}
      >
        <div className="flex items-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <BsFacebook className="mr-3 text-[#007ab2]" />
            Find us on Facebook!
          </a>

          <div className="flex items-center">
            <MdLocalPhone className="ml-5 mr-2 text-customMediumGreen" />
            <p>1 719 123 2344</p> 
            <HiOutlineMail className="ml-5 mr-2 text-customMediumGreen" />
            <p>email@email.com</p>
            <FaLocationDot className="ml-5 mr-2 text-customMediumGreen" />
            <p>Yoder, Colorado</p>
          </div>
        </div>

        <div className="mt-3 flex items-center">
    
          <p>JPEL Farms &copy; 2024</p>
        </div>
      </div>
    </footer>
  );
}
