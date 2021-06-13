import React from "react";

import { Container, TitleContainer, TitleWrapper } from "./styles";

type Props = {
  leftComponent?: JSX.Element;
  centerComponent?: JSX.Element;
  rightComponent?: JSX.Element;
};

const NavBar: React.FC<Props> = ({
  centerComponent,
  leftComponent,
  rightComponent,
}) => {
  return (
    <Container>
      {leftComponent}
      <TitleContainer>
        <TitleWrapper>{centerComponent}</TitleWrapper>
      </TitleContainer>
      {rightComponent}
    </Container>
  );
};

export default NavBar;
