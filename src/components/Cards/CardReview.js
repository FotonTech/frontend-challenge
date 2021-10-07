import Image from "next/image";
import reviewDay from "../../../public/images/reviewDay.jpeg";

export const CardReview = ({ book }) => {
  return (
    <div className="rounded-[5px] relative block">
      <Image src={reviewDay} alt="review of the day cover" />
    </div>
  );
};
