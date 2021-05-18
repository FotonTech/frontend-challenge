import React from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
import Line from "../svgComponents/verticalLineDetailsPage";
import ShareIcon from "../svgComponents/shareIcon";
import ReadIcon from "../svgComponents/readIcon";
import ListenIcon from "../svgComponents/listenIcon";

const BottomMenuBar = () => {
   return (
      <Flex
         w="335px"
         h="56px"
         marginLeft="21px"
         marginRight="20px"
         boxShadow="lg"
         bottom="53px"
         backgroundColor="white"
         borderRadius="2px"
         position="sticky"
         zIndex="overlay"
         alignContent="center"
         justifyContent="space-evenly"
         fontWeight="bold"
      >
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <ReadIcon />

            <Text marginLeft="10px" as="span">
               Read
            </Text>
         </Box>

         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <Line />
         </Box>

         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <ListenIcon />

            <Text marginLeft="10px" as="span">
               Listen
            </Text>
         </Box>

         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <Line />
         </Box>

         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <ShareIcon />

            <Text marginLeft="10px" as="span">
               Share
            </Text>
         </Box>
      </Flex>
   );
};

export default BottomMenuBar;
