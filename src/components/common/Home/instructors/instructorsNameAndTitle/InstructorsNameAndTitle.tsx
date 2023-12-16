import Image from "next/image";

import { instructorData } from "@/data";
import { IInstructors } from "@/interfaces";

const InstructorsNameAndTitle = () => {
  return (
    <div>
      <div className="min-w-[33rem] mx-auto -mb-40 grid grid-cols-3 gap-4">
        {instructorData.map(({ id, image, name, job }: IInstructors) => (
          <div
            className="bg-gray-medium p-1.5 rounded-lg cursor-pointer border border-gray-200/40"
            key={id}
          >
            <div className="relative w-full h-[7rem] rounded-lg">
              <Image
                src={image}
                alt={name}
                layout="fill"
                className="rounded-lg"
              />
            </div>
            <div>
              <div className="flex items-center justify-between  mt-[20px] mb-[9px]">
                <p className="flex items-center gap-1.5 -pb-2 font-semibold text-[8px] text-black/70">
                  {" "}
                  {name}
                </p>
                <p className="flex items-center gap-1.5 -pb-2  font-medium text-[8px] text-gray">
                  {" "}
                  {job}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstructorsNameAndTitle;
