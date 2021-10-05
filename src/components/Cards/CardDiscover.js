import Image from "next/image";
import sticks from "../../../public/images/sticks.svg";

export const CardDiscover = ({ book }) => {
  return (
    <div className="rounded-[5px] w-[272px] h-[139px] py-[15px] px-[20px] bg-dark-blue text-gray flex bg-circle bg-no-repeat bg-left-bottom">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="text-[27px] font-bold font-serif text-cloud">
            Titulo
          </h3>
          <h5 className="text-sm italic">Autor</h5>
        </div>
        <p className="text-[10px] text-card-gray">Reading</p>
      </div>
      <div className="relative">
        <div
          className="absolute top-[-11px] left-[-36px] z-10"
          role="background"
        >
          <Image src={sticks} alt="sticks foreground" />
        </div>
        <span>Image</span>
      </div>
    </div>
  );
};
