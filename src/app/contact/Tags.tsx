import React from "react";
import { titleFont } from "../utils/fonts";


interface TagsProps {

    header: string;
    content?: string;

  icon: any;
}
const Tags = ({ icon, header, content }: TagsProps) => {
  return (
    <div className="my-1 w-5/6  pl-3">
      <span className=" flex items-center">
        {icon}
        <p className={`${titleFont.className} ml-2 text-xl`}>{header}</p>
      </span>
      {content && <p className="ml-2">{content}</p>}
    </div>
  );
};

export default Tags;
