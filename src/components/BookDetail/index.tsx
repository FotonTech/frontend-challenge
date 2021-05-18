import parse from 'html-react-parser';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';
import { Container, Row } from 'reactstrap';
import * as BooksApi from '../../api/books';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';
import NoImageAvailable from '../../images/no-image-available.jpg';
import OvalDetail from '../../images/oval-detail.png';
import OvalSmall from '../../images/oval-small.png';
import BookDetailMenu from '../BookDetailMenu';
import {
  ArrowLink,
  Author,
  Circle,
  Col,
  Header,
  OvalImg,
  Text,
  Thumbnail,
  Title
} from './styled';

type TParams = {
  id: string;
};

type BookProps = {
  authors: string[];
  title: string;
  subtitle: string;
  description: string;
  infoLink: string;
  thumbnail: string;
};

const initialState = {
  authors: [],
  title: '',
  subtitle: '',
  description: '',
  infoLink: '',
  thumbnail: ''
};

const BookDetail = ({ match }: RouteComponentProps<TParams>) => {
  const { id } = match.params;
  const [book, setBook] = useState<BookProps>(initialState);
  const { authors, title, subtitle, description, infoLink, thumbnail } = book;

  useEffect(() => {
    const getBookById = async () =>
      await BooksApi.getById(id)
        .then(({ data }) => {
          const {
            authors,
            title,
            subtitle,
            description,
            infoLink,
            imageLinks
          } = data.volumeInfo;
          setBook({
            authors,
            title,
            subtitle,
            description,
            infoLink,
            thumbnail: imageLinks ? imageLinks.thumbnail : ''
          });
        })
        .catch((error) => {
          console.log(error);
        });

    getBookById();
  }, [id]);

  return (
    <>
      <Container>
        <Row>
          <Col className="p-0">
            <Header>
              <ArrowLink to="/">
                <ArrowLeft />
              </ArrowLink>
              <Circle size="15" bgColor="#FF6978" filled className="pos-1" />
              <Circle size="63" bgColor="#00173D" filled className="pos-2" />
              <Circle size="26" bgColor="#4550A7" className="pos-3" />
              <OvalImg
                className="pos-1"
                src={OvalDetail}
                width="100"
                height="100"
              />
              <OvalImg
                className="pos-2"
                src={OvalSmall}
                width="48"
                height="48"
              />
              <Thumbnail
                src={thumbnail ? thumbnail : NoImageAvailable}
                width="153"
                height="229"
              />
            </Header>
          </Col>
        </Row>
        <Row>
          <Col>
            <Title>
              <b>{title}</b> : {subtitle}
            </Title>
            <Author>{authors}</Author>
            <Text>{parse(description)}</Text>
          </Col>
        </Row>
      </Container>
      <BookDetailMenu
        links={{ readLink: infoLink, listenLink: '#', shareLink: '#' }}
      />
    </>
  );
};

export default BookDetail;
