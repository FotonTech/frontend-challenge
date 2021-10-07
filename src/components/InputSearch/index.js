import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { useState } from "react";
import SearchIcon from "../../../public/images/search.svg";

export const InputSearch = ({ defaultValue, ...props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTimeout, setSearchTimeout] = useState(null);
  const router = useRouter();

  const handleInputChange = (e) => {
    clearTimeout(searchTimeout);

    const query = e.target.value;

    if (query) {
      setIsLoading(true);

      const timeout = setTimeout(function () {
        router.push("/books/search/" + query, undefined, {
          shallow: true,
        });

        setIsLoading(false);
      }, 600);

      setSearchTimeout(timeout);

      return;
    }

    setIsLoading(false);
  };

  return (
    <div className="flex gap-[10px] bg-cloud rounded-[10px] py-[15px] px-[20px]">
      <Image src={SearchIcon} alt="search icon" />
      <input
        defaultValue={defaultValue}
        onChange={handleInputChange}
        className="w-full bg-cloud text-black outline-none text-base placeholder-color-placeholder"
        {...props}
      />
    </div>
  );
};
