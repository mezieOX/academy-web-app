import ArrowRight from "@/assets/icons/ArrowRight";

const Button = () => {
  return (
    <div className="block">
      <button className="bg-black text-white text-[8.2px] rounded-lg font-semibold h-11 flex px-5 gap-2 items-center">
        Start Course Now{" "}
        <ArrowRight className="w-[5.5px] fill-current ml-[6.3px] -mt-[2px]" />
      </button>
    </div>
  );
};

export default Button;
