import Image from "next/image";
import { NewsletterImage } from "@/constant/imgs";
import { Input } from "@/components/global/Input";

const NewsLetter = () => {
  return (
    <div className="relative h-20 w-40">
      <Image src={NewsletterImage} layout="fill" alt="" />
      <Input />
      <div>Find out about the latest courses with the academy newsletter</div>
    </div>
  );
};

export default NewsLetter;
