import React, { useEffect, useState } from "react";
import {
  IoIosArrowRoundBack,
  IoMdHeartEmpty,
  IoMdHeart,
  IoIosSearch,
  IoIosStar,
} from "react-icons/io";
import { useHistory, useLocation, useParams } from "react-router";
import BookThumbnail from "../../components/BookThumbnail";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import Typo from "../../components/Typo";
import { Book } from "../../utils/apiTypes";
import colors from "../../utils/colors";

import {
  BookActionsContainer,
  BookContainer,
  BookDetailsContainer,
  BookInfoContainer,
  BookTitleContainer,
  Container,
  DescriptionContainer,
  HeartButton,
} from "./styles";

const BookScreen: React.FC = () => {
  const history = useHistory();
  const location = useLocation<{ book?: Book; topic: string }>();
  const { topic, book: bookState } = location.state ?? {};
  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState(bookState);

  useEffect(() => {
    const fetchBookData = async () => {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      setBook(await res.json());
    };
    fetchBookData();
  }, [id]);

  const [starCount, setStarCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Container>
      <NavBar
        leftComponent={
          <IoIosArrowRoundBack
            size={42}
            color={colors.text.primary}
            onClick={() => history.goBack()}
          />
        }
        centerComponent={
          <Title variant="h6" as="h2" textAlign="center">
            {topic} Books
          </Title>
        }
        rightComponent={<IoIosSearch size={32} color={colors.text.primary} />}
      />
      <BookContainer>
        <BookInfoContainer>
          <BookThumbnail shadow src={book?.volumeInfo.imageLinks?.thumbnail} />
          <BookDetailsContainer>
            <BookTitleContainer>
              <Title variant="h6" as="h3" margin="0" fontWeight={700}>
                {book?.volumeInfo.title}
              </Title>
              <Typo as="h4" variant="subtitle">
                By {book?.volumeInfo.authors?.join(", ") ?? "--"}
              </Typo>
            </BookTitleContainer>
            <div>
              <Typo
                as="b"
                margin="8px 12px 8px 0"
                fontSize={1.6}
                fontWeight="bold"
                variant="body"
              >
                ${book?.saleInfo.listPrice?.amount ?? "--"}
              </Typo>
              {Array.from({ length: 5 }).map((_, index) => (
                <IoIosStar
                  opacity={index <= starCount - 1 ? 1 : 0.2}
                  size={20}
                  key={index}
                  onClick={() => setStarCount(index + 1)}
                />
              ))}
            </div>
          </BookDetailsContainer>
          <Typo margin="12px 0" as="span" variant="subtitle" textAlign="center">
            {book?.volumeInfo.pageCount} pages
          </Typo>
          <BookActionsContainer>
            <Button
              padding="8px 40px"
              shadow
              target="_blank"
              to={{
                pathname: book?.saleInfo.buyLink,
              }}
            >
              BUY
            </Button>
            <HeartButton color="secondary">
              {isFavorited ? (
                <IoMdHeart
                  size={24}
                  color={colors.text.light}
                  onClick={() => setIsFavorited(!isFavorited)}
                />
              ) : (
                <IoMdHeartEmpty
                  size={24}
                  color={colors.text.light}
                  onClick={() => setIsFavorited(!isFavorited)}
                />
              )}
            </HeartButton>
          </BookActionsContainer>
        </BookInfoContainer>
        <DescriptionContainer>
          <Typo variant="body">{book?.volumeInfo.description}</Typo>
        </DescriptionContainer>
      </BookContainer>
    </Container>
  );
};

export default BookScreen;
