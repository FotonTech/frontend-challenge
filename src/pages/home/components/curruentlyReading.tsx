import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import theme from "../../../theme";
import { BookBeingReadType } from "../../../types/index";
// import { Container } from './styles';

type DiscoverBoxType = {
   currentBook: BookBeingReadType;
};

const bookNameProperties = {
   lineHeight: "26,66px",
   letterSpacing: "2px",
   fontSize: "20px",
   fontFamily: "'Playfair Display', sans-serif",
   fontWeight: "700",
};
const bookAuthorProperties = {
   lineHeight: "11,72px",
   letterSpacing: "1.29 px",
   fontSize: "10px",
   color: "grey",
   fontFamily: "Roboto, sans-serif",
};

const DiscoverBox: React.FC<DiscoverBoxType> = ({ currentBook }) => {
   return (
      <Box display="flex" alignItems="center" color="black" height="136px">
         <Box position="absolute" zIndex="overlay">
            <Image
               boxShadow="sm"
               marginLeft="19px"
               borderRadius="1px"
               height="136px"
               w="91px"
               objectFit="fill"
               src={currentBook?.book?.thumbnail}
            />
         </Box>

         <Box overflow="hidden" position="relative" boxShadow="xs" backgroundColor="#EEF5DB" width="331px">
            <Box
               position="absolute"
               zIndex="overlay"
               marginLeft="223px"
               marginBottom="88px"
               marginRight="90px"
               marginTop="-6px"
            >
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="9" stroke="#4550A7" stroke-width="2" />
               </svg>
            </Box>

            <Box position="absolute"
               zIndex="overlay"
               marginLeft="308.2"
               marginBottom="20.5"
               marginRight="0"
               marginTop="64.5px">
                  <svg width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="1.16705" y="0.495239" width="46" height="4" transform="rotate(14 1.16705 0.495239)" fill="#EC6374"/>
</svg>


            </Box>


            <Box marginLeft="118px">
               <Text
                  {...bookNameProperties}
                  marginTop="10px"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
               >
                  {currentBook?.book?.name ?? "Hooked"}
               </Text>
               <Text
                  {...bookAuthorProperties}
                  marginTop="5px"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
               >
                  by {currentBook?.book?.author ?? "Nir Eyal"}
               </Text>

               <Box fontSize="10px" lineHeight="11,93px" marginTop="22" marginBottom="12px">
                  <Text as="span">Chapter</Text>
                  <Text as="span" fontWeight="bold" color="orange.500">
                     {" " + currentBook?.currentChapter + " "}
                  </Text>
                  <Text as="span">from{" " + currentBook?.totalChapters}</Text>
               </Box>
            </Box>
         </Box>
      </Box>
   );
};

export default DiscoverBox;
