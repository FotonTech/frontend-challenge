import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Col, Row } from 'reactstrap';
import { BooksContext } from '../../providers/booksProvider';

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
  }, [books.items, items]);

  useEffect(() => {
    actions.setSearchIndex(currentPage);
  }, [currentPage, isLoading, actions]);

  useEffect(() => {
    if (totalPages <= 0) {
      setTotalPages(Math.ceil(books.totalItems / 10));
    }
  }, [totalPages, books.totalItems]);

  const handleLoadMore = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 10);
    }
  };

  return (
    <>
      <Row className="row-cols-3">
        {items.map((book) => (
          <Col key={book.id}>
            {book.volumeInfo.title.length > 10
              ? `${book.volumeInfo.title.substring(0, 10)}...`
              : book.volumeInfo.title}
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <button onClick={handleLoadMore}>Load more</button>
        </Col>
      </Row>
    </>
  );
};

export default BooksList;
