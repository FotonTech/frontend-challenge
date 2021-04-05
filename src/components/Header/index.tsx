import React from "react";
import Title from "../Title";

import { AnimatedBackground, Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Title variant="h2" as="h1">
        Foton Books
      </Title>
      <AnimatedBackground />
    </Container>
  );
};

export default Header;
