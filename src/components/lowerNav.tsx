import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

const LowerNav = () => {
   return (
      <Box fontSize="10px" lineHeight="11,93px" paddingTop="11px" backgroundColor="#FFFFFF">
      <Flex
         justifyContent="space-between"
         flexDirection="row"
         width="375px"
         padding="0 32px 9px 32px"
        
         marginBottom="0"
         marginTop="auto"
         position="sticky"
         
      >
         <Flex direction="column" justifyContent="space-between" justifyItems="center" alignItems="center">
            <PhoneIcon />
            <Text>Home</Text>
         </Flex>

         <Flex direction="column" justifyContent="space-between" justifyItems="center" alignItems="center">
            <AddIcon />
            <Text>Libraries</Text>
         </Flex>

         <Flex direction="column" justifyContent="space-between" justifyItems="center" alignItems="center">
            <WarningIcon alignSelf="center" justifySelf="center" />
            <Text>Profile</Text>
         </Flex>
      </Flex>
      </Box>
   );
};

export default LowerNav;
