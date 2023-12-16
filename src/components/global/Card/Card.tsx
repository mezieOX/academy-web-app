import Image from "next/image";

import { ICard } from "@/interfaces";
import { Book, Cup, Score, UserIcon } from "@/assets/icons";
import { Button } from "../Button";
import { FigmaImg } from "@/constant/imgs";

const BookCard: React.FC<any> = ({ cardData }) => {
  return (
    <div className="max-w-[66rem] mx-auto -mt-[13.5rem] mb-20 grid grid-cols-4 gap-4">
      {cardData.map(({ id, title }: ICard) => (
        <div
          className="bg-gray-medium p-1.5 rounded-lg cursor-pointer border border-gray-200/40"
          key={id}
        >
          <div className="relative w-full h-[10.9rem] rounded-lg">
            <Image
              src={FigmaImg}
              alt="title"
              layout="fill"
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-[10px] font-semibold my-3 pl-1">
              {title.length > 50 ? title.substring(0, 40) + "..." : title}
            </h3>
            <div className="flex items-center justify-between  my-[14px]">
              <p className="flex items-center gap-1.5 font-semibold text-[8px] text-black/70">
                <Book className={"w-2.5 fill-current "} /> {"Lesson : 21"}
              </p>
              <p className="flex items-center gap-1.5 font-semibold text-[8px] text-black/70">
                <UserIcon className={"w-2.5 fill-current "} /> {"Student : 99"}
              </p>
              <p className="flex items-center gap-1 font-semibold text-[8px] text-black/70">
                <Cup className={"w-[15px] fill-current "} /> {"Student : 99"}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center -mt-1 mr-2 -mb-1">
            <Button
              className="!h-[29px] mb-2 !mr-0 !pl-5 !pr-4 text-[9px] hover:bg-primary duration-150 transition-all"
              title="Start Course"
              icon={true}
              buttonClassName={"!ml-0"}
            />
            <Score className="w-7" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
