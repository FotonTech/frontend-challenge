import React from 'react';
import { Col, Row } from 'reactstrap';
import GlobalStyle from '../../globalStyles';
import DiscoverBooks from '../DiscoverBooks';
import Greetings from '../Greetings';
import SearchField from '../SearchField';
import { Container } from './styled';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container fluid>
        <Row>
          <Col>
            <SearchField />
          </Col>
        </Row>
        <Row>
          <Col>
            <Greetings name="Mehmed Al Fatih" />
          </Col>
        </Row>
        <DiscoverBooks />
      </Container>
    </>
  );
};

export default App;
