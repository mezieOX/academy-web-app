import Image from "next/image";

import Aside from "./aside/Aside";
import { bannerImg } from "@/constant/imgs";

const Banner = () => {
  return (
    <div className="max-w-[67rem] mx-auto flex">
      <Aside />
      <div className="relative w-[50vw] h-[34rem] mt-[4rem]">
        <Image
          src={bannerImg}
          layout={"fill"}
          alt={"banner-image"}
          className={"rounded-lg scale-[1.09]"}
        />
      </div>
    </div>
  );
};

export default Banner;
