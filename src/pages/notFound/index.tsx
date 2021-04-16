import React from "react";
import Navbar from "../../components/navbar";
import styled from "styled-components";
// import { Container } from './styles';

const Text = styled.h1`
   text-align: "center";
`;

const NotFound: React.FC = () => {
   return (
      <React.Fragment>
         <Navbar buttonText="Voltar para home" linkPath="/" showNumberOfItens={false} />
         <Text>Ops! Página não encontrada..</Text>
      </React.Fragment>
   );
};

export default NotFound;
