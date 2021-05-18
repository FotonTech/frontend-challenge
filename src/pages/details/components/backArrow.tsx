import React from "react";
import { Box } from "@chakra-ui/react";

const BackArrow: React.FC<{ callbackFunction: () => void }> = ({ callbackFunction }) => {
   return (
      <Box position="absolute" marginTop="55px" marginLeft="33px" onClick={callbackFunction}>
         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 8H1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M8 15L1 8L8 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </Box>
   );
};

export default BackArrow;
