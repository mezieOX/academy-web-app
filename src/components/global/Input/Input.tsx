import { Search } from "@/assets/icons";
import { IInput } from "@/interfaces/IInput";

const Input: React.FC<IInput> = ({
  className,
  placeholder = "Search Anything",
  type = "text",
}) => {
  return (
    <div className="bg-gray-100/70 px-3 flex items-center rounded-lg h-[40px]">
      <input
        type={type}
        className={`placeholder:text-[9px] bg-transparent flex-grow outline-0 border-0 focus:outline-none focus:border-none pr-2 ${className} text-[9px]`}
        placeholder={placeholder}
      />
      <Search className="fill-current w-4" />
    </div>
  );
};

export default Input;
