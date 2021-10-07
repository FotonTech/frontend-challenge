import Image from "next/image";
import Link from "next/link";
import sticks from "../../../public/images/sticks.svg";

export const CardDiscover = ({ book, index, swiperIndex }) => {
  const isCurrentIndex = index === swiperIndex;
  const widthCard = isCurrentIndex ? "272px" : "250px";
  const heightCard = isCurrentIndex ? "139px" : "128px";

  return (
    <div
      className={`rounded-[5px] py-[15px] px-[20px] transition-all ${
        isCurrentIndex ? "bg-dark-blue" : "bg-purple"
      } duration-150 mr-[10px] text-gray bg-circle bg-no-repeat bg-left-bottom`}
      style={{
        width: widthCard,
        height: heightCard,
      }}
    >
      <Link href={`/books/${book.id}`}>
        <a className="flex">
          <div className="flex flex-1 flex-col justify-between">
            <div>
              <h3 className="font-bold font-serif text-cloud">{book.title}</h3>
              <h5 className="text-sm italic">
                {book.authors.map((author) => `${author},`)}
              </h5>
            </div>
            <p className="text-[10px] text-card-gray">120+ Read now</p>
          </div>
          <div className="relative">
            <div
              className="absolute top-[-11px] left-[-36px] z-10"
              role="background"
            >
              <Image
                src={sticks}
                width={59}
                height={108}
                alt="sticks foreground"
              />
            </div>
            <Image
              width={72}
              height={111}
              src={book.image}
              alt="book thumbnail"
            />
          </div>
        </a>
      </Link>
    </div>
  );
};
