import React from 'react';
import { Col, Row } from 'reactstrap';
import { ReactComponent as BookIcon } from '../../images/book.svg';
import { ReactComponent as HomeIcon } from '../../images/home.svg';
import { ReactComponent as UserIcon } from '../../images/user.svg';
import { Container } from './styled';

const MenuBottom: React.FC = () => {
  return (
    <Container fluid className="fixed-bottom">
      <Row>
        <Col>
          <div className="icon">
            <HomeIcon /> Home
          </div>
        </Col>
        <Col>
          <div className="icon">
            <BookIcon /> Libraries
          </div>
        </Col>
        <Col>
          <div className="icon">
            <UserIcon /> Profile
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuBottom;
