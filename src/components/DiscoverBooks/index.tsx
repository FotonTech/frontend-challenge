import { CarouselProvider, Image, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from 'reactstrap';
import OvalBottomPng from '../../images/oval-bottom.png';
import OvalTopPng from '../../images/oval-top.png';
import BlockWrapper from '../BlockWrapper';
import {
  Card,
  ChartIcon,
  Circle,
  DiscoverWrapper,
  ImageWrapper,
  OvalImg,
  Rectangle,
  Triangle
} from './styled';

const CardItem: React.FC = () => (
  <Card>
    <Row className="no-gutters">
      <Col xs="8">
        <OvalImg
          className="oval-top"
          src={OvalTopPng}
          width="127"
          height="127"
        />
        <CardBody>
          <CardTitle tag="h3">Hooked</CardTitle>
          <CardSubtitle tag="h6">Nir Eyal</CardSubtitle>
          <CardText>
            <ChartIcon size="16px" />
            <span>120+</span> Read Now
          </CardText>
        </CardBody>
        <OvalImg
          className="oval-bottom"
          src={OvalBottomPng}
          width="127"
          height="127"
        />
      </Col>
      <Col xs="4">
        <ImageWrapper>
          <Circle />
          <Triangle />
          <Image
            hasMasterSpinner
            className="card-img"
            src="http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
          />
        </ImageWrapper>
        <Rectangle />
      </Col>
    </Row>
  </Card>
);

const DiscoverBooks: React.FC = () => {
  return (
    <BlockWrapper title="Discover new book" linkTitle="More" href="#">
      <DiscoverWrapper>
        <CarouselProvider
          visibleSlides={1.261}
          totalSlides={7}
          naturalSlideWidth={272}
          naturalSlideHeight={139}
          hasMasterSpinner
          isPlaying={false}
        >
          <Slider>
            <Slide index={1}>
              <CardItem />
            </Slide>
            <Slide index={2}>
              <CardItem />
            </Slide>
            <Slide index={3}>
              <CardItem />
            </Slide>
            <Slide index={4}>
              <CardItem />
            </Slide>
            <Slide index={5}>
              <CardItem />
            </Slide>
            <Slide index={6}>
              <CardItem />
            </Slide>
            <Slide index={7}>
              <CardItem />
            </Slide>
          </Slider>
        </CarouselProvider>
      </DiscoverWrapper>
    </BlockWrapper>
  );
};

export default DiscoverBooks;
