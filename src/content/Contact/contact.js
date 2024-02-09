import { HiOutlineMail } from "react-icons/hi";
import { MdLocalPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

const contactContent = [
  {
    header: "CALL US",
    content: `1 (719) 123-1234`,
    icon: <MdLocalPhone className="text-xl text-customMediumGreen" />,
  },
  {
    header: "EMAIL US",
    content: `email@email.com`,
    icon: <HiOutlineMail className="text-xl text-customMediumGreen" />,
  },

  {
    header: "LOCATION",
    content: `31550 Sanborn Road, Yoder, Colorado 80864`,
    icon: <FaLocationDot className="text-xl text-customMediumGreen" />,
  },

  {
    header: "Find us on Facebook!",
    icon: <FaFacebook className="text-xl text-[#007ab2]" />,
  },
];

export default contactContent;
