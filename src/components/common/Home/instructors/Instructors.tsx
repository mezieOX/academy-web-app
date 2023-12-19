import Image from "next/image";

import { InstructorBackground } from "@/constant/imgs";
import InstructorsNameAndTitle from "./instructorsNameAndTitle/InstructorsNameAndTitle";
import BestInstructors from "./bestInstructors/BestInstructors";

const Instructors = () => {
  return (
    <div className="max-w-[67rem] mx-auto my-48 relative">
      <BestInstructors />
      <div className="relative">
        <div className="absolute bottom-[5rem] -ml-60 left-[43rem]">
          <div className="absolute z-[-1] top-[4.5rem] -left-20 min-w-[60rem]">
            <div className="relative h-[12.8rem]  w-[60rem]">
              <Image
                src={InstructorBackground}
                layout="fill"
                alt={"instructors-background"}
              />
            </div>
          </div>
          <div>
            <InstructorsNameAndTitle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
