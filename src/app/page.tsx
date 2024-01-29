import Image from "next/image";
import {textFont, titleFont} from "../app/utils/fonts";

export default function Home() {
  return <div className="bg-red-200 h-24"><p className={`${titleFont.className} text-6xl`}>HomePage</p></div>;
}
