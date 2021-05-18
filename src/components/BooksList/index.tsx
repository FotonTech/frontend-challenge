import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Row
} from 'reactstrap';
import NoImageAvailable from '../../images/no-image-available.jpg';
import { BooksContext } from '../../providers/booksProvider';
import { CardImg, Col, Wrapper } from './styled';

const BooksList: React.FC = () => {
  const { state, actions } = useContext(BooksContext);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { books, isLoading } = state;
  const [items, setItems] = useState<any[]>([]);

  useMemo(() => {
    let difference = [...items, ...books.items];
    difference = difference.filter(
      (item, index) => difference.findIndex((x) => x.id === item.id) === index
    );

    setItems([...difference]);
  }, [books.items]);

  useEffect(() => {
    actions.setSearchIndex(currentPage);
  }, [currentPage, isLoading]);

  useEffect(() => {
    if (totalPages <= 0) {
      setTotalPages(Math.ceil(books.totalItems / 10));
    }
  }, [totalPages]);

  const handleLoadMore = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 8);
    }
  };

  return (
    <Wrapper>
      <Row className="no-gutters justify-content-between">
        {items.map((book) => {
          const {
            volumeInfo: { title, authors, imageLinks }
          } = book;

          return (
            <>
              <Col key={book.id}>
                <Link to={`/book/${book.id}`}>
                  <Card>
                    <CardImg
                      className="card-image"
                      bgImage={
                        imageLinks ? imageLinks.thumbnail : NoImageAvailable
                      }
                    />
                    <CardBody>
                      <CardTitle title={title}>{title}</CardTitle>
                      <CardSubtitle title={`by ${authors}`}>
                        by {authors}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            </>
          );
        })}
      </Row>
      <Row className="no-gutters justify-content-center">
        <Button onClick={handleLoadMore}>Load more</Button>
      </Row>
    </Wrapper>
  );
};

export default BooksList;
