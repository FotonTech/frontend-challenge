import React from 'react';
import { TitleContainer, NameText } from '../styles';

const Title: React.FC = () => {
  return (
    <TitleContainer>
      <span>Hi,</span>
      <NameText>Mehmed Al Fatih</NameText>
      <span>👋</span>
    </TitleContainer>
  );
};

export default Title;
