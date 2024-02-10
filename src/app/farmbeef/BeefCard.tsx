import { titleFont, textFont } from "@/app/utils/fonts";

interface BeefCardProps {
  color: string;
  number: string;
  header: string;
  list: {
      title: string;
      content: string;
  }[];
}

export default function BeefCard({ list, color, number, header }: BeefCardProps) {
  return (
    <div
      className={`shadow-element ${color} flex flex-1 items-stretch justify-between rounded bg-opacity-90 p-2`}
    >
      <div className="h-[100%] w-[27%]">
        <p className={`${textFont.className} px-5 text-[200px]`}>{number}</p>
      </div>
      <div className="shadow-element flex w-[70%] flex-col items-start justify-start rounded bg-customWhite bg-opacity-50 px-3 pb-1">
        <h3
          className={`${titleFont.className} m-2 border-b-2 border-customDarkGreen border-opacity-50 text-4xl  leading-snug`}
        >
          {header}
        </h3>
        <ul
          className={`${textFont.className} flex flex-col justify-evenly text-xl`}
        >
          {list.map((item, index) => (
            <li key={index} className="m-1 mb-4">
              <span className="font-bold">{item.title}</span> {item.content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
