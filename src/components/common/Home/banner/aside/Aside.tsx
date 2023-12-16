import { Button } from "@/components/global/Button";
import { HomeArrow, HomeBooked } from "@/assets/icons";

const Aside = () => {
  return (
    <div className="text-[26.5px] flex flex-col flex-[50%] xl:flex-[60%] capitalize font-extrabold mt-[7rem] !leading-[49px] ">
      <div className="flex">
        <div className="-mt-1 mr-1">🙌</div> {"Hello friends"}
      </div>
      <p> {"I am Sofia and we want to start"} </p>{" "}
      <p>
        {"a"} <span className="banner__text text-primary">{"web design"}</span>{" "}
        {"course together."}{" "}
      </p>{" "}
      {"Do you like it too 😍 ?"}
      <div className="mt-[3.1rem] relative">
        <Button />
        <div className="absolute -top-[4.5rem] -left-[3.4rem]">
          <HomeArrow className="fill-current !w-[51px] !h-[58px]" />
        </div>
        <div className="absolute -bottom-4 left-[7.8rem]">
          <HomeBooked className="fill-current !h-[80px] !w-[205.41px]" />
        </div>
      </div>
    </div>
  );
};

export default Aside;
