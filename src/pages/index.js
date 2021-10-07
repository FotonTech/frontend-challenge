import { CardDiscover, CardReading, CardReview } from "components/Cards";
import { SectionCard } from "components/Cards/SectionCard";
import { Greeting } from "components/Greetings";
import { InputSearch } from "components/InputSearch";
import { Navbar } from "components/Navbar";
import { useDiscoveryBooks } from "hooks/useDiscoveryBooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState } from "react";
import Head from "next/head";
import { useReadingBooks } from "hooks/useReadingBooks";

export default function Home() {
  const [swiper, setSwiper] = useState(0);
  const { data, error, loading } = useDiscoveryBooks();
  const {
    data: readingBooks,
    error: readingError,
    loading: readingLoading,
  } = useReadingBooks();

  return (
    <main className="py-[50px] px-[20px] max-w-[960px] m-auto">
      <Head>
        <title>BookOpository</title>
      </Head>

      <div>
        <div className="fixed z-10 bottom-0 left-0 right-0">
          <Navbar />
        </div>
        <InputSearch placeholder="Search book" />
        <Greeting name="Adilson Mandlate" />
        <SectionCard
          title="Discover new book"
          titleAction={{ name: "More", link: "/more" }}
        >
          {loading && <div>Loading data...</div>}

          {!loading && error && <div>Error loading data...</div>}

          {!loading && !error && (
            <Swiper
              breakpoints={{
                375: {
                  slidesPerView: 1.15,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
              slidesPerView={1}
              onTransitionEnd={(data) => setSwiper(data.realIndex)}
            >
              {data.map((book, index) => (
                <SwiperSlide key={book.id}>
                  <CardDiscover
                    index={index}
                    swiperIndex={swiper}
                    book={book}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </SectionCard>

        <SectionCard
          title="Currently Reading"
          titleAction={{ name: "All", link: "/more" }}
        >
          {readingLoading && <div>Loading data...</div>}

          {!readingLoading && readingError && <div>Error loading data...</div>}

          {!readingLoading && !readingError && (
            <Swiper
              breakpoints={{
                base: {
                  slidesPerView: 1,
                },
                800: {
                  slidesPerView: 3,
                },
              }}
            >
              {readingBooks.map((book) => (
                <SwiperSlide key={book.id}>
                  <CardReading book={book} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </SectionCard>

        <SectionCard
          title="Reviews of The Days"
          titleAction={{ name: "All video", link: "/more" }}
        >
          <CardReview />
        </SectionCard>
      </div>
    </main>
  );
}
