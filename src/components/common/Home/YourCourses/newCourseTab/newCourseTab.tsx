import { Circle, MoreIcon, NewCourseArrow } from "@/assets/icons";
import { Input } from "@/components/global/Input";

const NewCourseTab = () => {
  return (
    <>
      <h1 className="text-2xl max-w-[67rem] text-dark font-bold leading-[46px] capitalize text-center">
        {"Search among"} <span className="text-primary">{"58340"}</span>{" "}
        {"courses and"} <p>{"find your favorite course"}</p>
      </h1>
      <div className="flex items-center gap-3 flex-grow my-6 relative">
        <NewCourseArrow className="absolute bottom-7 -right-[4.3rem] !h-[40px] !w-[78px]" />
        <Input inputButton={true} containerClassName="!h-[46px] !w-[540px]" />
        <p className="text-[10px] text-gray/70 font-medium capitalize">
          {"Or view the following courses..."}
        </p>
      </div>
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
              {"all course"}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NewCourseTab;
