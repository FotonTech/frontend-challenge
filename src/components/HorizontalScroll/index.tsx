import React from 'react';
import { Container, StyledTypography, StyledLinkButton } from './styles';
import { BooksModel } from '../../hooks/utils';
import Card from './Card';

interface Props {
  books: BooksModel[];
}

const HorizontalScroll: React.FC<Props> = ({ books }) => {
  return (
    <>
      <StyledTypography>
        <span>Discover new book</span>
        <StyledLinkButton>More</StyledLinkButton>
      </StyledTypography>
      <Container>
        {
          // eslint-disable-next-line
          books
            ? books.map((item: any, index) => {
                if (index < 10) {
                  return (
                    <Card
                      to={`/libraries/${item.id}`}
                      key={item.id}
                      item={item}
                    />
                  );
                }
              })
            : ''
        }
      </Container>
    </>
  );
};

export default HorizontalScroll;
