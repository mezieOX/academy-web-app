import { courseOptions } from "@/data";
import { Code, Course, Video } from "@/assets/icons";
import ArrowRight from "@/assets/icons/ArrowRight";

const CourseOption = () => {
  return (
    <div className="max-w-[67rem] mx-auto my-6 justify-between flex  items-center">
      <div className="overflow-scroll scrollbar-hide  flex gap-[16px] items-center ">
        {courseOptions.map(({ id, text, icon }) => (
          <div
            className={`bg-gray-100/70 w-max rounded-lg flex items-center capitalize cursor-pointer ${
              (text && "px-[22px]") || (icon && "ml-5 first:ml-0")
            } ${icon === "Code" && "bg-green-light"} ${
              icon === "Video" && "bg-red-light"
            } h-12 px-[11px] text-[10px] font-semibold`}
            key={id}
          >
            {icon === "Code" && (
              <Code className={"fill-current text-green w-[1.5rem]"} />
            )}
            {icon === "Course" && (
              <Course className={"fill-current text-primary w-[1.5rem] "} />
            )}
            {icon === "Video" && (
              <Video className={"fill-current text-red  w-[1.5rem]"} />
            )}
            {text}
          </div>
        ))}
      </div>
      <div>
        <ArrowRight
          className={
            "fill-current w-[.8rem] h-[.8rem] flex-grow ml-4 cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

export default CourseOption;
