import Image from "next/image";
import bookImage from "../../../public/images/bookCover.svg";

export const CardReading = ({ book }) => {
  return (
    <div className="rounded-[3px] mt-[30px] w-[331px] h-[100px] py-[10px] px-[20px] bg-light-green text-black flex gap-2 bg-currentlyReading bg-minus-top-right bg-no-repeat">
      <div className="mt-[-32px]">
        <Image
          width={90}
          height={136}
          src={bookImage}
          alt="currently reading book image"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-[20px] font-bold font-serif">Titulo</h3>
          <h5 className="text-sm italic">Autor</h5>
        </div>

        <p className="text-[10px]">Reading</p>
      </div>
    </div>
  );
};
