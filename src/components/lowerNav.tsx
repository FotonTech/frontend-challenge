import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const LowerNav = () => {
   return (
      <Flex
         justifyContent="space-between"
         flexDirection="row"
         width="375px"
         backgroundColor="#FFFFFF"
         bottom="0"
         marginBottom="1px"
         marginTop="auto"
         position="absolute"
      >
         <Box>
            <PhoneIcon />
            <Text>Home</Text>
         </Box>

         <Box>
            <AddIcon />
            <Text>Libraries</Text>
         </Box>

         <Box>
            <WarningIcon alignSelf="center" justifySelf="center" />
            <Text>Profile</Text>
         </Box>
      </Flex>
   );
};

export default LowerNav;
