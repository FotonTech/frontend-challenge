import React, { useState, useEffect } from 'react';
import {
  Container,
  StyledImg,
  InfoContainer,
  ContentContainer,
  StyledTitle,
  StyledSubTitle,
  ChapterTextContainer,
  StyledChapterText,
} from './styles';

import { useBooks } from '../../../hooks/useBooks';

import { ReactComponent as BookIcon } from '../../../assets/images/tagBook-icon.svg';

const Card: React.FC = () => {
  // eslint-disable-next-line
  const [book, setBook] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { getByName } = useBooks();

  useEffect(() => {
    getByName('Adam Grant')
      .then(({ data }) => {
        setBook(data.items[0]);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Container>
      <ContentContainer>
        <StyledImg src={book.volumeInfo.imageLinks.smallThumbnail} />
        <InfoContainer>
          <StyledTitle>{book.volumeInfo.title}</StyledTitle>
          <StyledSubTitle>by {book.volumeInfo.authors[0]}</StyledSubTitle>
          <ChapterTextContainer>
            <BookIcon />
            <StyledChapterText>Chapter 2 from 10</StyledChapterText>
          </ChapterTextContainer>
        </InfoContainer>
      </ContentContainer>
    </Container>
  );
};

export default Card;
