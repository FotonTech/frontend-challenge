import { InputSearch } from "components/InputSearch";
import { useSearchBooks } from "hooks/useSearchBooks";
import { useRouter } from "next/dist/client/router";
import { Navbar } from "components/Navbar";
import Head from "next/head";
import Image from "next/dist/client/image";
import Link from "next/dist/client/link";
import { useState } from "react";

export default function Search() {
  const router = useRouter();
  const { query } = router.query;

  const [searchParams, setSeacrhParams] = useState({
    q: query,
    startIndex: 0,
  });

  const { data, loading, error } = useSearchBooks(searchParams);

  const handleLoadMore = () => {
    setSeacrhParams((oldParams) => {
      return {
        ...oldParams,
        startIndex: oldParams.startIndex + data.items.length,
      };
    });
  };

  return (
    <main className="py-[50px] px-[20px] max-w-[960px] m-auto">
      <Head>
        <title>Search '{query}' books | BookOpository</title>
      </Head>

      <div className="fixed z-10 bottom-0 left-0 right-0">
        <Navbar />
      </div>

      <InputSearch defaultValue={query} placeholder="Search book" />

      <section className="py-[40px] grid grid-cols-auto-fill gap-3 justify-center">
        {loading && <div>Loading data</div>}

        {!loading && error && <div>Error loading data</div>}

        {!loading &&
          !error &&
          data.items.map((book) => {
            return (
              <Link key={book.id} href={`/books/${book.id}`}>
                <a>
                  {book?.volumeInfo?.imageLinks?.thumbnail && (
                    <div>
                      <Image
                        src={book.volumeInfo.imageLinks.thumbnail}
                        alt="book cover"
                        width={95}
                        height={153}
                      />
                    </div>
                  )}

                  <div className="mt-[10px]">
                    <h2 className="text-xs font-bold text-color-text-dark">
                      {book.volumeInfo.title}
                    </h2>
                    <h4 className="text-[10px] font-black text-color-text-dark italic">
                      {book.volumeInfo.authors?.map((author) => author)}
                    </h4>
                  </div>
                </a>
              </Link>
            );
          })}
      </section>

      {!loading && !error && (
        <button
          className="pb-[40px] text-pink text-lg font-bold"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </main>
  );
}
