import { Circle } from "@/assets/icons";

const YourCourseHeader = () => {
  return (
    <div className="flex mt-20 min-w-[67rem] max-w-[67rem] mx-auto ">
      <div className="flex items-center gap-1 mt-[7px] flex-grow">
        <Circle className="fill-current !w-[3px] -mt-px" />
        <h3 className="text-sm uppercase font-medium">{"Your Courses"}</h3>
      </div>
      <div>
        <ul className="flex items-center text-[10px] capitalize text-black/90 font-semibold gap-5">
          <li className="px-[17px] text-gray py-2 bg-gray-100/70  cursor-pointer rounded-lg hover:bg-primary duration-150 transition-all hover:text-white">
            {"see all"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default YourCourseHeader;
