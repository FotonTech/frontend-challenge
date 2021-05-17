import React, { useContext } from 'react';
import { Col, Row } from 'reactstrap';
import { BooksContext } from '../../providers/booksProvider';
import BooksList from '../BooksList';
import CurrentlyReading from '../CurrentlyReading';
import DiscoverBooks from '../DiscoverBooks';
import Greetings from '../Greetings';
import MenuBottom from '../MenuBottom';
import Reviews from '../Reviews';
import SearchField from '../SearchField';
import { Container } from './styled';

const Home: React.FC = () => {
  const { state, actions } = useContext(BooksContext);
  const { books, isLoading, search } = state;

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <SearchField onSearch={actions.setSearchText} />
          </Col>
        </Row>
        {books.items.length >= 0 && isLoading && search !== '' ? (
          <>Is Loading</>
        ) : (
          <>
            {books.items.length > 0 ? (
              <BooksList />
            ) : (
              <>
                <Row>
                  <Col>
                    <Greetings name="Mehmed Al Fatih" />
                  </Col>
                </Row>
                <DiscoverBooks />
                <CurrentlyReading />
                <Reviews />
              </>
            )}
          </>
        )}
      </Container>
      <MenuBottom />
    </>
  );
};

export default Home;
