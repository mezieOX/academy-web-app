import InstructorsArrow from "@/assets/icons/InstructorsArrow";
import { Button } from "@/components/global/Button";
import { Advertising } from "@/constant/imgs";
import Image from "next/image";

const BestInstructors = () => {
  return (
    <div className="pt-2 relative w-max">
      <h3 className="capitalize text-2xl font-bold">
        <span className="text-primary ">best</span> Instructors
      </h3>
      <p className="!text-[9px] mt-5 mb-16 max-w-[15rem] capitalize">
        At the Academy, we strive to bring together the best professors for the
        best courses
      </p>
      <div className="absolute bottom-4 -right-0">
        <Image src={Advertising} width={80} height={80} alt={"instructors"} />
      </div>
      <div className="absolute right-[60px] -bottom-[10px]">
        <InstructorsArrow className="!w-[62px]" />
      </div>
      <Button
        className="!h-[29px] -mt-2 mb-2 !mr-0 !pl-5 !pr-4 py-5 text-[9px] hover:bg-primary duration-150 transition-all"
        title="All Instructors"
        icon={true}
        buttonClassName={"!ml-0"}
      />
    </div>
  );
};

export default BestInstructors;
