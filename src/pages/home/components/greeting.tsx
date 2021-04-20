import React from "react";
import { Text, Box } from "@chakra-ui/react";
import theme from "../../../theme";

type GreetingProps = {
   name?: String;
};
const Greeting: React.FC<GreetingProps> = ({ name = "Mehmed Al Fatih" }) => {
   return (
      <>
         <Box fontSize="24px" margin="30px 0">
            <Text as="span">Hi, </Text>
            <Text as="span" fontWeight="bold" color={theme.colors.textRed}>
               {name} 👋{" "}
            </Text>
         </Box>
        
      </>
   );
};

export default Greeting;
