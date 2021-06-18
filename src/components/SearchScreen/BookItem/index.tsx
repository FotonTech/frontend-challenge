import React from 'react';
import { Container, StyledImage, StyledText } from './styles';
import { BooksModel } from '../../../hooks/utils';
import img from '../../../assets/images/not-found.png';

interface Props {
  item: BooksModel;
  to: string;
}

const BookItem: React.FC<Props> = ({ item, to }) => {
  const book = item.volumeInfo;
  return (
    <Container to={to}>
      <StyledImage src={book.imageLinks ? book.imageLinks.thumbnail : img} />
      <StyledText>{book.title && book.title}</StyledText>
      <StyledText>by {book.authors && book.authors[0]}</StyledText>
    </Container>
  );
};

export default BookItem;
