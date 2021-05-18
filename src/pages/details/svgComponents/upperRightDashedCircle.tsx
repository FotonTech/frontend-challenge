import React from "react";
import { Box, Image } from "@chakra-ui/react";
import CircleSource from "../../../components/circle.png";
const Circle: React.FC = () => {
   return (
      <Box margin="-34.45px -55.45px 183.55px 298.55px" position="absolute">
         <Image h="100px" w="100px" transform="rotate(25deg)" src={CircleSource} />
      </Box>
   );
};

export default Circle;
