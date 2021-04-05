import React from "react";
import Button from "../../components/Button";
import Title from "../../components/Title";

import { Container } from "./styles";

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title variant="h6" textAlign="center" fontWeight={500}>
        Inicie agora sua nova jornada literária
      </Title>
      <Button to="/list/design">Ver Livros de Design</Button>
      <Button to="/list/computação">Ver Livros de Computação</Button>
    </Container>
  );
};

export default HomeScreen;
