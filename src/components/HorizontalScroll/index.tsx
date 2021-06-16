import React from 'react';
import { Container, StyledTypography, StyledLinkButton } from './styles';
import { BooksModel } from '../../hooks/utils';
import Card from './Card';

interface Props {
  books: BooksModel[];
}

const HorizontalScroll: React.FC<Props> = (books) => {
  const teste = books.books;

  return (
    <>
      <StyledTypography>
        <span>Discover new book</span>
        <StyledLinkButton>More</StyledLinkButton>
      </StyledTypography>
      <Container>
        {
          // eslint-disable-next-line
          teste.map((item: any, index) => {
            if (index < 3) {
              return <Card key={item.id} item={item} />;
            }
          })
        }
      </Container>
    </>
  );
};

export default HorizontalScroll;
