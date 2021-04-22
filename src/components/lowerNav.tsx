import React from "react";
import { Box, Text, Icon } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const LowerNav: React.FC<{ currentPage?: string }> = ({ currentPage = "home" }) => {
   const stroke = "#BFBEBF";

   return (
      <Box
         position="sticky"
         bottom="0"
         fontWeight="400"
         marginTop="auto"
         fontSize="10px"
         lineHeight="11,93px"
         paddingTop="11px"
         backgroundColor="#FFFFFF"
      >
         <Flex justifyContent="space-between" flexDirection="row" width="375px" padding="0 55px 9px 52px">
            <Flex direction="column" justifyContent="space-around" justifyItems="center" alignItems="center">
               <Icon
                  as="svg"
                  marginBottom="10px"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M1 6.22222L9 0L17 6.22222V16C17 16.9818 16.2041 17.7778 15.2222 17.7778H2.77778C1.79594 17.7778 1 16.9818 1 16V6.22222Z"
                     stroke={currentPage === "home" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     d="M6.33333 17.7778V8.88892H11.6667V17.7778"
                     stroke={currentPage === "home" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </Icon>

               <Text color={currentPage === "home" ? "black" : stroke}>Home</Text>
            </Flex>

            <Flex direction="column" justifyItems="center" alignItems="center">
               <Icon
                  as="svg"
                  marginBottom="10px"
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M1 15.75C1 14.5074 2.00736 13.5 3.25 13.5H15.4"
                     stroke={currentPage === "libraries" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M3.25 0H15.4V18H3.25C2.00736 18 1 16.9926 1 15.75V2.25C1 1.00736 2.00736 0 3.25 0Z"
                     stroke={currentPage === "libraries" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </Icon>

               <Text color={currentPage === "libraries" ? "black" : stroke}>Libraries</Text>
            </Flex>

            <Flex direction="column" justifyContent="space-between" justifyItems="center" alignItems="center">
               <Icon as="svg" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M17 18V16C17 13.7909 15.2091 12 13 12H5C2.79086 12 1 13.7909 1 16V18"
                     stroke={currentPage === "profile" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
                  <circle
                     cx="9"
                     cy="4"
                     r="4"
                     stroke={currentPage === "profile" ? "black" : stroke}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </Icon>

               <Text color={currentPage === "profile" ? "black" : stroke}>Profile</Text>
            </Flex>
         </Flex>
      </Box>
   );
};

export default LowerNav;
