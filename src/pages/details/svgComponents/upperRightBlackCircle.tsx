import React from "react";
import { Box } from "@chakra-ui/react";

const Circle: React.FC = () => {
   return (
      <Box margin="86px 103px 172px 249px" position="absolute">
         <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" stroke="#4550A7" stroke-width="2" />
         </svg>
      </Box>
   );
};

export default Circle;
