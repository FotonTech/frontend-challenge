import AwesomeDebouncePromise from "awesome-debounce-promise";
import React, { useEffect, useState } from "react";
import { IoIosMenu, IoIosSearch, IoIosClose } from "react-icons/io";
import { useHistory, useParams } from "react-router";
import BookThumbnail from "../../components/BookThumbnail";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import { Book, BooksApiResponse } from "../../utils/apiTypes";
import colors from "../../utils/colors";
import {
  Container,
  BooksContainer,
  ButtonContainer,
  SearchInput,
} from "./styles";

const RESULTS_PER_PAGE = 24;

async function getBooks(page: number, query: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?startIndex=${
      (page - 1) * RESULTS_PER_PAGE
    }&printType=books&maxResults=${RESULTS_PER_PAGE}&q=${query}`
  );
  return (await res.json()) as BooksApiResponse;
}

const debouncedGetBooks = AwesomeDebouncePromise(getBooks, 300);

const ListScreen: React.FC = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [books, setBooks] = useState<Array<Book>>([]);

  const { topic } = useParams<{ topic: string }>();
  const history = useHistory();

  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const search = async () => {
      setLoading(true);
      const result = await debouncedGetBooks(
        page,
        searchTerm ? searchTerm : topic
      );
      setBooks((books) =>
        page === 1 ? result.items : [...books, ...result.items]
      );
      setHasNextPage(page < Math.ceil(result.totalItems / RESULTS_PER_PAGE));
      setLoading(false);
    };
    search();
  }, [page, topic, searchTerm]);

  useEffect(() => {
    setPage(1);
    if (!showSearchInput) {
      setSearchTerm("");
    }
  }, [showSearchInput]);

  return (
    <Container>
      <NavBar
        leftComponent={<IoIosMenu size={32} color={colors.text.primary} />}
        centerComponent={
          showSearchInput ? (
            <SearchInput
              value={searchTerm}
              onChange={(e) => {
                setPage(1);
                setSearchTerm(e.target.value);
              }}
              placeholder="Pesquisar"
            />
          ) : (
            <Title variant="h6" as="h2" textAlign="center">
              {topic} Books
            </Title>
          )
        }
        rightComponent={
          showSearchInput ? (
            <IoIosClose
              size={32}
              color={colors.text.primary}
              onClick={() => setShowSearchInput(false)}
            />
          ) : (
            <IoIosSearch
              size={32}
              color={colors.text.primary}
              onClick={() => setShowSearchInput(true)}
            />
          )
        }
      />
      <BooksContainer>
        {books.map((book) => (
          <BookThumbnail
            key={book.id}
            onClick={() => history.push(`/book/${book.id}`)}
            src={book.volumeInfo.imageLinks?.thumbnail}
            shadow
          />
        ))}
        <ButtonContainer>
          {hasNextPage && (
            <Button
              color={loading ? "secondary" : "primary"}
              onClick={() => !loading && setPage((page) => page + 1)}
            >
              {loading ? "Carregando..." : "Mostrar Mais"}
            </Button>
          )}
        </ButtonContainer>
      </BooksContainer>
    </Container>
  );
};

export default ListScreen;
