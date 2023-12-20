import Link from "next/link";
import Image from "next/image";

import { Circle, Logo } from "@/assets/icons";
import { FooterBanner } from "@/constant/imgs";

const Footer = () => {
  return (
    <div className="pt-7">
      <div className="flex items-start flex-col justify-between mx-auto  max-w-[67rem] bg-gray-medium p-4 rounded-[30px_30px_0px_0px]">
        <div className="flex justify-between w-full items-start">
          <div className="text-[10px] bg-gray-bold capitalize max-w-[50rem] px-4 py-6 rounded-[30px] rotate-[180%] mb-8 leading-[1.3rem] rounded-tl-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium
          </div>
          <div>
            {" "}
            <Link href={"/"} className="flex flex-col gap-1 items-center mt-2">
              <Logo className="fill-current text-primary w-[4rem] h-[4rem]" />
              <p className="text-[22px] font-black mt-1.5">{"ACADEMY"}</p>
            </Link>
          </div>
        </div>
        <div className="flex gap-20 w-full">
          <div>
            <div className="flex items-center gap-1 mt-[7px] flex-grow">
              <Circle className="fill-current !w-[3px] -mt-px" />
              <h3 className="text-sm uppercase font-medium ">
                {"Membership Certificate"}
              </h3>
            </div>
            <div className="relative w-[24.9vw] h-[15.9rem] mt-4">
              <Image
                src={FooterBanner}
                layout={"fill"}
                alt={"footer-banner"}
                className={"rounded-lg"}
              />
            </div>
          </div>
          <div className="w-min -ml-12">
            <div className="flex items-center gap-1 mt-[7px] flex-grow">
              <Circle className="fill-current !w-[3px] -mt-px" />
              <h3 className="text-sm uppercase font-medium ">{"Categories"}</h3>
            </div>
            <ul className="flex flex-col gap-[7px] text-[10px] pl-2 pt-5 capitalize text-black">
              <li>Designing</li>
              <li>Programming</li>
              <li>front end</li>
              <li>Composition</li>
              <li>tailoring</li>
              <li>Database</li>
              <li>Sport</li>
              <li>cooking</li>
              <li>driving</li>
              <li>Photography</li>
              <li>camerawork</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-1 mt-[7px] flex-grow">
              <Circle className="fill-current !w-[3px] -mt-px" />
              <h3 className="text-sm uppercase font-medium w-max">
                {"quick access"}
              </h3>
            </div>
            <ul className="flex flex-col gap-[7px] text-[10px] pl-2 pt-5 capitalize text-black">
              <li>What We Offer</li>
              <li>Careers</li>
              <li>Leadership</li>
              <li>About</li>
              <li>Catalog</li>
              <li>Degrees</li>
              <li>For Enterprise</li>
              <li>For Government</li>
              <li>For Campus</li>
              <li>Become a Partner</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className="-ml-4">
            <div className="flex items-center gap-1 mt-[7px] flex-grow ">
              <Circle className="fill-current !w-[3px] -mt-px" />
              <h3 className="text-sm uppercase font-medium">{"new comment"}</h3>
            </div>
            <div className="flex flex-col gap-2 text-[10px] pl-2 mt-[15px]">
              <div className="bg-gray-bolder capitalize p-[14px] rounded">
                <p className="text-black font-bold">ellsmartx</p>
                <p className="w-max text-gray">
                  how nice does this look 😍 I feel it should be deliciou...
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[10px] pl-2 mt-[15px]">
              <div className="bg-gray-bolder capitalize p-[14px] rounded">
                <p className="text-black font-bold">cassia</p>
                <p className="w-max text-gray">
                  Take a rest, i&#39;ll be cheer up you again in 2 next game go
                  go go
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[10px] pl-2 mt-[20px]">
              <div className="bg-gray-bolder capitalize p-4 rounded">
                <p className="text-black font-bold">amanda</p>
                <p className="w-max text-gray">
                  you were stunning today, jan! 💗 great match 👍🏽👍🏽
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[10px] pl-2 mt-[15px]">
              <div className="bg-gray-bolder capitalize p-[14px] rounded">
                <p className="text-black font-bold">Denis Simonassi</p>
                <p className="w-max text-gray">
                  It was a great match today Janzi! You did great😉🇩🇪
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full text-[10px] text-gray bg-gray-bolder p-4 capitalize mt-10 rounded-xl">
          <p>privacy policy | terms & conditions</p>
          <p>all copyright (c) 2022 reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
