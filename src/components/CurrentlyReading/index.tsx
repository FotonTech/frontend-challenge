import React from 'react';
import {
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Row
} from 'reactstrap';
import OvalTopPng from '../../images/oval-top-card-reading.png';
import BlockWrapper from '../BlockWrapper';
import {
  BookIcon,
  Card,
  CardImg,
  Circle,
  OvalImg,
  Rectangle,
  Wrapper
} from './styled';

const CurrentlyReading: React.FC = () => {
  return (
    <BlockWrapper title="Currently Reading" linkTitle="All" href="#">
      <Card>
        <Row className="no-gutters">
          <Col>
            <CardBody>
              <CardImg
                src="http://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
                height="130"
                width="88"
              />
              <div className="wrap-figures">
                <Circle />
                <OvalImg
                  className="oval-top"
                  src={OvalTopPng}
                  width="69"
                  height="69"
                />
                <Wrapper>
                  <CardTitle tag="h5">Originals</CardTitle>
                  <CardSubtitle tag="h6">by Adam Grant</CardSubtitle>
                  <CardText>
                    <BookIcon size="16px" />
                    Chapter <span>2</span> From 9
                  </CardText>
                </Wrapper>
                <Rectangle />
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </BlockWrapper>
  );
};

export default CurrentlyReading;
