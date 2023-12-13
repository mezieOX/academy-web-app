import Image from "next/image";
import Link from "next/link";

import { ArrowDown, Bell, Logo } from "@/assets/icons";
import { Input } from "@/components/global/Input";
import { userProfile } from "@/constant/imgs";

const Header = () => {
  return (
    <div className="border-b border-gray/10 pb-[26px] pt-8">
      <div className="flex items-center justify-between mx-auto max-w-[67rem]">
        <div className="flex items-center gap-8">
          <Link href={"/"} className="flex gap-1 items-center">
            <Logo className="fill-current text-primary w-6 h-6" />
            <p className="text-[22px] font-black">{"ACADEMY"}</p>
          </Link>
          <nav>
            <ul className="flex capitalize text-[10px] gap-6 text-gray">
              <li className="flex items-center gap-1 cursor-pointer">
                {"categories"} <ArrowDown className="fill-current w-2.5" />
              </li>
              <li className="cursor-pointer">{"Teach"}</li>
              <li className="cursor-pointer">{"contact us"}</li>
              <li className="cursor-pointer">{"about us"}</li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="mr-20 w-52">
            <Input />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src={userProfile}
              width={45}
              height={45}
              alt={"user-image"}
              className={"rounded-lg"}
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-[11px]">{"Behzad pashaei"}</p>
              <p className="text-gray text-[9px] capitalize">
                {"ui & ux designer"}
              </p>
            </div>
            <div className="bg-gray-100/70 ml-6 rounded-lg h-11 w-11 flex items-center justify-center cursor-pointer">
              <Bell className="fill-current w-3.5 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
