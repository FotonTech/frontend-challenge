import React from 'react';
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
import { BooksModel } from '../../../hooks/utils';

import { ReactComponent as BookIcon } from '../../../assets/images/tagBook-icon.svg';

interface Props {
  item: BooksModel;
  to: string;
}

const Card: React.FC<Props> = ({ item, to }) => {
  return (
    <Container to={to}>
      <ContentContainer>
        <StyledImg src={item?.volumeInfo?.imageLinks?.smallThumbnail} />
        <InfoContainer>
          <StyledTitle>{item?.volumeInfo?.title}</StyledTitle>
          <StyledSubTitle>by {item?.volumeInfo?.authors[0]}</StyledSubTitle>
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
