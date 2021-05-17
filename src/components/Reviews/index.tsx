import React from 'react';
import {
  // CardBody,
  // CardSubtitle,
  // CardText,
  // CardTitle,
  Col,
  Row
} from 'reactstrap';
import Thumbnail from '../../images/image-example.jpg';
import BlockWrapper from '../BlockWrapper';
import { Card, CardImg } from './styled';

const Reviews: React.FC = () => {
  return (
    <BlockWrapper title="Reviews of The Days" linkTitle="All Video" href="#">
      <Card>
        <Row className="no-gutters">
          <Col>
            <CardImg top src={Thumbnail} height="181" width="335" />
            {/* <CardBody>
              <Wrapper>
                <CardTitle tag="h5">Don’t Make Me Think - Steve Krug</CardTitle>
                <CardSubtitle tag="h6">
                  <span>Jesse Showalter</span> 5.2K Views 1 Week ago
                </CardSubtitle>
                <CardText>
                  <BookIcon size="16px" />
                  Chapter <span>2</span> From 9
                </CardText>
              </Wrapper>
            </CardBody> */}
          </Col>
        </Row>
      </Card>
    </BlockWrapper>
  );
};

export default Reviews;
