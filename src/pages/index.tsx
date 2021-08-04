import Head from "next/Head";
import { SearchInput } from "../components/SearchInput";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>

      <main>
        <SearchInput />
      </main>
    </>
  )
}