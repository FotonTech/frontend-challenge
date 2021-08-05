import Head from "next/Head";
import Link from "next/link";
import { BooksSlide } from "../components/BooksSlide";
import { SearchInput } from "../components/SearchInput";
import { Container, Content, Heading } from "../styles/home";

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
      </Container>
    </>
  )
}