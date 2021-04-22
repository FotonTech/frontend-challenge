import React from "react";
import { Text, Box, Image, GridItem } from "@chakra-ui/react";
import { BookType } from "../types";
// import { Container } from './styles';

const BookCard: React.FC<BookType> = (book) => {
   return (
      <GridItem colSpan={1} rowSpan={1}  width="105px">
         <Image width="105px" src={book.thumbnail} />
         <Text fontSize="12px"
         
         whiteSpace="nowrap"
         textOverflow="ellipsis"
         overflow="hidden">
            {book.name}
         </Text>
         <Text
            fontSize="10px"
            fontFamily="Roboto, sans-serif"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
            overflow="hidden"
         >
            by {book.author}
         </Text>
      </GridItem>
   );
};

export default BookCard;
