import Image from "next/image";

import { yourCourse } from "@/data";
import { Book, Cup, UserIcon } from "@/assets/icons";
import { Button } from "@/components/global/Button";
import { Points } from "@/constant/imgs";

const YourCourseCard = () => {
  return (
    <div className="max-w-[67rem] mx-auto -mt-[13.5rem] mb-20 grid grid-cols-2 gap-5">
      {yourCourse.map(
        ({
          id,
          title,
          image,
          status,
          point,
          image2,
          instructorJob,
          instructorName,
        }) => (
          <div
            className="bg-gray-medium p-1.5 grid grid-cols-2 rounded-lg cursor-pointer border border-gray-200/40"
            key={id}
          >
            <div className="relative w-full h-[10.9rem] rounded-lg">
              <Image
                src={image}
                alt={title}
                layout="fill"
                className="rounded-lg"
              />
            </div>
            <div className="pr-2 pl-3">
              <h3 className="text-[11px] font-medium my-3 first-letter:uppercase">
                {title.length > 41 ? title.substring(0, 39) + "..." : title}
              </h3>
              <div className="flex items-center  justify-between  my-[18px] mr-4">
                <p className="flex items-center gap-1.5 font-semibold text-[9px] text-black/70">
                  <Book className={"w-2.5 fill-current "} /> {"Lesson : 6"}
                </p>
                <p className="flex items-center gap-1.5 font-semibold text-[9px] text-black/70">
                  <UserIcon className={"w-2.5 fill-current "} />{" "}
                  {`Student : 196`}
                </p>
                <p className="flex items-center gap-1 font-semibold text-[9px] text-black/70">
                  <Cup className={"w-[15px] fill-current "} /> {status}
                </p>
              </div>
              <div className="mt-6">
                <div className="relative w-full h-[7px] rounded-lg">
                  <Image
                    src={Points}
                    alt="point"
                    layout="fill"
                    className="rounded-lg"
                  />
                </div>
                <div className="flex justify-between mt-[5px]">
                  <h4 className="text-[8.2px] text-black/800">
                    Points: {point}/100
                  </h4>
                  <h4 className="text-[8.3px] text-black">Days: 56</h4>
                </div>
              </div>
              <div className="flex justify-between items-center mt-6 -mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src={image2}
                      alt={instructorName}
                      layout="fill"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="">
                    <p className="text-[10px] font-medium">{instructorName}</p>
                    <p className="text-[8.5px] text-gray mt-1">
                      {instructorJob}
                    </p>
                  </div>
                </div>
                <Button
                  className="!h-[29px] !mr-0 !pl-5 !pr-4 text-[9px] hover:bg-primary duration-150  transition-all"
                  title="Let's Go"
                  icon={true}
                  buttonClassName={"!ml-0"}
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default YourCourseCard;
