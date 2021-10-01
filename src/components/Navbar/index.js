import Image from "next/image";
import Link from "next/link";
import homeImg from "../../../public/images/home.svg";
import bookImg from "../../../public/images/book.svg";
import userImg from "../../../public/images/user.svg";

export const Navbar = () => {
  return (
    <div className="grid justify-around grid-cols-3 text-center py-[10px] bg-white">
      <Link href="/">
        <a className="flex flex-col">
          <Image src={homeImg} alt="go to home page" />
          <span className="text-[10px] mt-[10px]">Home</span>
        </a>
      </Link>
      <Link href="/">
        <a className="flex flex-col text-gray">
          <Image
            src={bookImg}
            className="stroke-current"
            alt="go to libraries page"
          />
          <span className="text-[10px] mt-[10px]">Libraries</span>
        </a>
      </Link>
      <Link href="/">
        <a className="flex flex-col text-gray">
          <Image src={userImg} alt="go to profile page" />
          <span className="text-[10px] mt-[10px]">Profile</span>
        </a>
      </Link>
    </div>
  );
};
