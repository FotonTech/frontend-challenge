import React from "react";
import { Box, Image } from "@chakra-ui/react";
import CircleSource from "../../../components/circle.png";
const Circle: React.FC = () => {
   return (
      <Box margin="218.11px 89.11px 0.11px 223.11px" position="absolute">
         <Image h="48px" w="48px" transform="rotate(25deg)" src={CircleSource} />
      </Box>
   );
};

export default Circle;
