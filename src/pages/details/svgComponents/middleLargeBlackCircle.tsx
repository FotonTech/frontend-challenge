import React from "react";
import { Box } from "@chakra-ui/react";

const Circle: React.FC = () => {
   return (
      <Box margin="115px 239px 104px 74px" position="absolute">
         <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="31.5" cy="31.5" r="31.5" fill="#00173D" />
         </svg>
      </Box>
   );
};

export default Circle;
