import { InstructorBackground } from "@/constant/imgs";
import BestInstructors from "./bestInstructors/BestInstructors";
import Image from "next/image";
import InstructorsNameAndTitle from "./instructorsNameAndTitle/InstructorsNameAndTitle";

const Instructors = () => {
  return (
    <div className="max-w-[67rem] mx-auto my-48 relative">
      <BestInstructors />
      <div>
        <div className="absolute bottom-5 -right-0">
          <Image
            src={InstructorBackground}
            layout="fill"
            alt={"instructors-background"}
          />
          <InstructorsNameAndTitle />
        </div>
      </div>
    </div>
  );
};

export default Instructors;
