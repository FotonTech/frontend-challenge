import Image from "next/image";
import Link from "next/link";

export const CardReading = ({ book }) => {
  return (
    <div className="rounded-[3px] my-[18px] w-[331px] h-[100px] py-[10px] px-[20px] flex gap-2 bg-light-green text-black  bg-currentlyReading bg-minus-top-right bg-no-repeat">
      <div className="mt-[-32px]">
        <Image
          width={90}
          height={136}
          src={book.image}
          alt="currently reading book thumbnail"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-[16px] font-bold font-serif">{book.title}</h3>
          <h5 className="text-sm italic">
            {book.authors.map((author) => `${author} `)}
          </h5>
        </div>

        <p className="text-[10px]">Chapter 2 From 9</p>
      </div>
    </div>
  );
};
