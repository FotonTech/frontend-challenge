import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import { useBooks } from '../../hooks/useBooks';

import Title from './Title';
import SearchBar from '../../components/SearchBar';
import Tabbar from '../../components/Tabbar';
import HorizontalScroll from '../../components/HorizontalScroll';
import CurrentlyReading from '../../components/CurrentlyReading/index';
import Reviews from '../../components/Reviews/index';
import SearchScreen from '../../components/SearchScreen';
import Loading from '../../components/Loading/index';

const Home: React.FC = () => {
  // eslint-disable-next-line
  const [books, setBooks] = useState<any>();
  // eslint-disable-next-line
  const [book, setBook] = useState<any>();
  // eslint-disable-next-line
  const [search, setSearch] = useState<any>();
  const [loading, setLoading] = useState(true);
  const { getAll, getByName } = useBooks();

  const handleSearch = (name: string) => {
    if (name === '') {
      setSearch(undefined);
    } else {
      getByName(name).then((data) => {
        setSearch(data);
      });
    }
  };

  useEffect(() => {
    getAll()
      .then((item) => {
        setBooks(item);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getByName('Adam Grant')
      .then((data) => {
        setBook(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const clearSearch = () => {
    setSearch(undefined);
  };

  return (
    <>
      <Container>
        <SearchBar onChange={handleSearch} clearSearch={clearSearch} />
        {search !== undefined ? (
          <SearchScreen searchResults={search.data.items} />
        ) : (
          <>
            <Title />
            <HorizontalScroll books={books?.data?.items} />
            <CurrentlyReading book={book?.data?.items[0]} />
            <Reviews />
          </>
        )}
      </Container>
      <Tabbar />
    </>
  );
};

export default Home;
