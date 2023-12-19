import { Circle } from "@/assets/icons";

const TopCourseTab = () => {
  return (
    <div className="flex mt-20 w-[66rem]">
      <div className="flex items-center gap-1 mt-[7px] flex-grow">
        <Circle className="fill-current !w-[3px] -mt-px" />
        <h3 className="text-[13.5px] uppercase font-semibold">
          {"Your Courses"}
        </h3>
      </div>
      <div>
        <ul className="flex items-center text-[10px] capitalize text-black/90 font-semibold gap-5">
          <li className="px-[17px] py-2 bg-gray-100/70  cursor-pointer rounded-lg">
            {"see all"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopCourseTab;
