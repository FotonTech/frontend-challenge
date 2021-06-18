import React from 'react';
import { Container, StyledTypography, StyledLinkButton } from './styles';
import Card from './Card';
import { BooksModel } from '../../hooks/utils';

interface Props {
  book: BooksModel;
}

const CurrentlyReading: React.FC<Props> = ({ book }) => {
  return (
    <>
      {book && (
        <>
          <StyledTypography>
            <span>Currently Reading</span>
            <StyledLinkButton>All</StyledLinkButton>
          </StyledTypography>
          <Container>
            <Card to={`/libraries/${book.id}`} item={book} />
          </Container>
        </>
      )}
    </>
  );
};

export default CurrentlyReading;
