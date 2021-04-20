import React from 'react';
import { Text, Box } from "@chakra-ui/react";
// import { Container } from './styles';

type LabelType = {
    leftText: string,
    rightText: string,
    rightTextDestination?: string,
    marginTop?: string
}

const Label: React.FC<LabelType> = ({leftText, rightText, marginTop = 0}) => {
  return <Box marginTop={marginTop} display="flex" justifyContent="flex-start">
  <Text marginBottom="15px" fontSize="18px">
     {leftText || "Discover new book"}
  </Text>
  <Text justifySelf="flex-end" textColor="blue.300" marginRight="20px" marginLeft="auto">
     {rightText || "More"}
  </Text>
</Box>;
}

export default Label ;