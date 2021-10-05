import { CardDiscover, CardReading, CardReview } from "components/Cards";
import { SectionCard } from "components/Cards/SectionCard";
import { Greeting } from "components/Greetings";
import { InputSearch } from "components/InputSearch";
import { Navbar } from "components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
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
          <CardDiscover />
        </SectionCard>
        <SectionCard
          title="Currently Reading"
          titleAction={{ name: "All", link: "/more" }}
        >
          <CardReading />
        </SectionCard>
        <SectionCard
          title="Reviews of The Days"
          titleAction={{ name: "All video", link: "/more" }}
        >
          <CardReview />
        </SectionCard>
      </div>
    </>
  );
}
