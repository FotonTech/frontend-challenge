import React from 'react';
import { Container } from './styles';

import { BooksModel } from '../../hooks/utils';
import Loading from '../Loading';
import BookItem from './BookItem';

interface Props {
  searchResults: BooksModel[] | undefined;
}

const SearchScreen: React.FC<Props> = ({ searchResults }) => {
  if (!searchResults) {
    return <Loading />;
  }

  return (
    <Container>
      {searchResults !== undefined && searchResults !== [] ? (
        searchResults.map((item) => {
          return (
            <BookItem key={item.id} to={`/libraries/${item.id}`} item={item} />
          );
        })
      ) : (
        <h4>Nenhuma item encontrado</h4>
      )}
    </Container>
  );
};

export default SearchScreen;
