import { Navbar } from "components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BookOpository</title>
      </Head>

      <div>
        <div className="fixed bottom-0 left-0 right-0">
          <Navbar />
        </div>
        <p className="">Hello there!</p>
      </div>
    </>
  );
}
