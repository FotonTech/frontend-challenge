import Head from "next/Head";
import { NavigationBar } from "../components/NavigationBar";
import { SearchInput } from "../components/SearchInput";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>

      <main>
        <SearchInput />
        <NavigationBar activeItem={1} />
      </main>
    </>
  );
}
