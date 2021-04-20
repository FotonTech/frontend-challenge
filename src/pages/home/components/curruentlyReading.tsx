import React from "react";
import { Text, Box, Image } from "@chakra-ui/react";
import theme from "../../../theme";
import { BookBeingReadType } from "../../../types/index";
// import { Container } from './styles';

type DiscoverBoxType ={
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
      <Box display="flex" alignItems="center"  color="black" height="136px" borderRadius="1px">
         <Box position="absolute" zIndex="overlay" >
            <Image  boxShadow="sm" marginLeft="19px" borderRadius="1px" height="136px" src={currentBook.book.thumbnail} />
         </Box>

         <Box position="relative" boxShadow="xs"  backgroundColor="#EEF5DB" height="100px" width="331px">
            <Box marginLeft="118px">
               <Text {...bookNameProperties} marginTop="10px">
                  Hooked
               </Text>
               <Text {...bookAuthorProperties} marginTop="5px">
                  Nir Eyal
               </Text>

               <Box fontSize="10px" lineHeight="11,93px" marginTop="22" marginBottom="12px">
                  <Text as="span">
                      Chapter
                  </Text>
                  <Text as="span" fontWeight="bold" color="orange.500">
                    {" "+currentBook.currentChapter+" "}
                  </Text>
                  <Text as="span">from{" "+currentBook.totalChapters}</Text>
               </Box>
            </Box>
         </Box>
   </Box>
   );
};

export default DiscoverBox;
