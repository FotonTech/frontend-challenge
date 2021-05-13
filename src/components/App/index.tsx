import React from 'react';
import { Col, Row } from 'reactstrap';
import GlobalStyle from '../../globalStyles';
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
      </Container>
    </>
  );
};

export default App;
