import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import backArrow from "../../../public/images/arrow.svg";
import bookOpen from "../../../public/images/bookOpen.svg";
import headphones from "../../../public/images/headphones.svg";
import share from "../../../public/images/share.svg";
import { useGetBookById } from "hooks/useGetBookById";

export default function Home() {
  const {
    query: { id },
    back,
  } = useRouter();

  const { data, error, loading } = useGetBookById(id);

  return (
    <main className="pb-[80px] max-w-[960px] m-auto">
      <Head>
        <title>Book details | BookOpository</title>
      </Head>

      <section>
        {loading && (
          <div className="h-screen w-screen flex justify-center items-center">
            Loading data...
          </div>
        )}

        {!loading && error && (
          <div className="h-screen w-screen flex justify-center items-center">
            Error loading data!
          </div>
        )}

        {!loading && !error && (
          <>
            <header className="bg-bookBackground md:bg-bookBackgroundDesktop bg-no-repeat bg-left-top mb-9 flex flex-col items-center">
              <div className="mt-[55px] ml-[33px] self-start">
                <a onClick={back} className="cursor-pointer">
                  <Image src={backArrow} alt="go back to previous page" />
                </a>
              </div>
              <div className="mt-[15px] shadow-md">
                <Image
                  src={data?.volumeInfo?.imageLinks?.thumbnail}
                  height={229}
                  width={153}
                  alt="Book cover"
                />
              </div>
            </header>
            <div className="py-0 px-[20px]">
              <h1 className="text-2xl font-bold mb-[10px]">
                {data?.volumeInfo?.title} :{" "}
                <span className="font-normal">
                  {data?.volumeInfo?.subtitle}
                </span>
              </h1>
              <p className="text-pink text-base">
                {data?.volumeInfo?.authors[0]}
              </p>
              <p className="mt-[10px] text-sm text-color-text-light leading-[25px]">
                {data?.volumeInfo?.description}
              </p>
            </div>
          </>
        )}
      </section>
      <ul className="fixed max-w-[335px] m-auto bottom-[53px] left-[20px] right-[20px] p-[20px] flex items-center justify-between bg-white rounded-[2px]">
        <li>
          <Link href="#">
            <a className="flex items-start font-bold text-sm leading-[17px] text-title">
              <Image src={bookOpen} alt="read button" />
              <span className="ml-[10px]">Read</span>
            </a>
          </Link>
        </li>
        <li className="border-l pl-[26px] border-menu">
          <Link href="#">
            <a className="flex items-start font-bold text-sm leading-[17px] text-title">
              <Image src={headphones} alt="listen button" />
              <span className="ml-[10px]">Listen</span>
            </a>
          </Link>
        </li>
        <li className="border-l pl-[26px] border-menu">
          <Link href="#">
            <a className="flex items-start font-bold text-sm leading-[17px] text-title">
              <Image src={share} alt="share button" />
              <span className="ml-[10px]">Share</span>
            </a>
          </Link>
        </li>
      </ul>
    </main>
  );
}
