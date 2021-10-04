import Image from "next/image";
import SearchIcon from "../../../public/images/search.svg";

export const InputSearch = (props) => {
  return (
    <div className="flex gap-[10px] bg-cloud rounded-[10px] py-[15px] px-[20px]">
      <Image src={SearchIcon} alt="search icon" />
      <input
        className="w-full bg-cloud text-black outline-none text-base placeholder-color-placeholder"
        {...props}
      />
    </div>
  );
};
