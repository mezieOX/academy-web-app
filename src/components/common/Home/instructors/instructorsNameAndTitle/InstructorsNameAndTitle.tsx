import { Book, Cup, Score, UserIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";
import { FigmaImg } from "@/constant/imgs";
import { cardData } from "@/data";
import { ICard } from "@/interfaces";
import Image from "next/image";

const InstructorsNameAndTitle = () => {
  return (
    <div>
      <div className="max-w-[33rem] mx-auto mb-20 grid grid-cols-3 gap-4">
        {cardData.map(({ id, title }: any) => (
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
              <div className="flex items-center justify-between  my-[14px]">
                <p className="flex items-center gap-1.5 font-semibold text-[8px] text-black/70">
                  {" "}
                  {"Student : 99"}
                </p>
                <p className="flex items-center gap-1.5 font-semibold text-[8px] text-black/70">
                  {" "}
                  {"Student : 99"}
                </p>
                <p className="flex items-center gap-1 font-semibold text-[8px] text-black/70"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsNameAndTitle;
