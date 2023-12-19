import Image from "next/image";

import { NewsletterImage } from "@/constant/imgs";
import { Input } from "@/components/global/Input";

const NewsLetter = () => {
  return (
    <div className="mb-40 mt-24">
      <div className="relative h-[12.2rem] w-[90%]">
        <Image src={NewsletterImage} layout="fill" alt="" className="" />
        <div className="absolute text-dark top-1/4 flex max-w-[72rem] pl-[8.5rem] mx-auto w-full items-center justify-between">
          <div className="text-[26px] -mt-px capitalize font-black leading-[50px] tracking-tighter">
            Find out about the{" "}
            <span>
              {" "}
              latest courses with the <br />{" "}
              <span className="text-blue">academy</span> newsletter
            </span>
          </div>
          <div className="mr-[2rem]">
            <Input
              placeholder="Email address..."
              containerClassName="bg-white shadow-[0px_8px_64px_0px_#0000001A] h-[45px] w-[22rem]"
              inputButtonRight={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
