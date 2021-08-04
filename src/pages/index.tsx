import Head from "next/Head";
import { NavigationBar } from "../components/NavigationBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>

      <NavigationBar />
    </>
  );
}
