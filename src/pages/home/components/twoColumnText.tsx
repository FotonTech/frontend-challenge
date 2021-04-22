import React from "react";
import { Text, Box } from "@chakra-ui/react";
// import { Container } from './styles';

type LabelType = {
   leftText: string;
   rightText: string;
   rightTextDestination?: string;
   marginTop?: string;
};

const Label: React.FC<LabelType> = ({ leftText, rightText, marginTop = 0 }) => {
   return (
      <Box margin={marginTop + " 20px 30px 20px"} display="flex" justifyContent="flex-start">
         <Text fontWeight="semibold" lineHeight="21,09px" letterSpacing="0,5 px" fontSize="18px">
            {leftText || "Discover new book"}
         </Text>
         <Text justifySelf="flex-end" textColor="blue.300" marginLeft="auto">
            {rightText || "More"}
         </Text>
      </Box>
   );
};

export default Label;
