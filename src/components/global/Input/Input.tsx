import { Search } from "@/assets/icons";
import { IInput } from "@/interfaces/IInput";
import { Button } from "../Button";

const Input: React.FC<IInput> = ({
  className,
  placeholder = "Search Anything",
  type = "text",
  inputButton = false,
  containerClassName,
  onChange,
  inputButtonRight = false,
}) => {
  return (
    <div
      className={`${containerClassName} bg-gray-100/70 px-3 flex items-center rounded-lg h-[40px]`}
    >
      {inputButton && (
        <Button
          className="!h-[29px] mr-[13px] hover:bg-primary duration-75 transition-all cursor-pointer"
          title="Categories"
          icon={false}
        />
      )}
      <input
        type={type}
        className={`placeholder:text-[9px] bg-transparent flex-grow outline-0 border-0 focus:outline-none focus:border-none pr-2 ${className} text-[9px]`}
        placeholder={placeholder}
        onChange={onChange}
      />
      {inputButtonRight ? (
        <Button
          className="!h-[29px] mr-[2px] hover:bg-primary duration-75 transition-all cursor-pointer"
          title="SUBMIT"
          icon={false}
        />
      ) : (
        <Search className="fill-current w-4 cursor-pointer" />
      )}
    </div>
  );
};

export default Input;
