import Head from "next/Head";
import Link from "next/link";
import { BooksSlide } from "../components/BooksSlide";
import { Container, Content, Heading } from "../styles/home";
import { NavigationBar } from "../components/NavigationBar";
import { SearchInput } from "../components/SearchInput";


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FotonBooks</title>
      </Head>

      <Container>
        <SearchInput />
        <Content>
          <section>
            <Heading>
              <h2>Discover new book</h2>
              <Link href="/search">
                <a>More</a>
              </Link>
            </Heading>
              
            <BooksSlide />
          </section>

        </Content>
        <NavigationBar activeItem={1} />
      </Container>
    </>
  );
}
