import { NewsletterImage } from "@/constant/imgs";
import Image from "next/image";

const NewsLetter = () => {
  return (
    <div className="relative h-20 w-40">
      <Image src={NewsletterImage} layout="fill" alt="" />
    </div>
  );
};

export default NewsLetter;
