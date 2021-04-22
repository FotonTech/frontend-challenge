import React from "react";
import { Text, Box, Image, GridItem } from "@chakra-ui/react";
import { BookType } from "../../types/index";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useHistory } from "react-router";
import { useAppSelector } from "../../Redux/hooks";

// import { Container } from './styles';

const Details: React.FC<{ id: string }> = ({ id }) => {
   const history = useHistory();
   const booksFromRedux = useAppSelector((state) => state.db);
   const onClickGoBack = () => {
      history.goBack();
   };
   let selectedBook: BookType = booksFromRedux.books[0];
   const selectedBooks = booksFromRedux.books.filter((element) => element.id === id);
   if (!selectedBooks || selectedBooks.length === 0) {
      alert("Livro inválido.");
      history.push("/");
   } else selectedBook = selectedBooks[0];

   return (
      <Box>
         <Box h="282px" width="376px" backgroundColor="#FFF6E5" borderRadius="0 0 130px 0">
            <ArrowBackIcon position="absolute" marginTop="55px" marginLeft="33px" onClick={onClickGoBack} />
            <Image
               borderRadius="md"
               boxShadow="lg"
               margin="84px 111px 0 114px"
               position="absolute"
               zIndex="overlay"
               w="151px"
               h="234px"
               src={selectedBook.thumbnail}
            />
         </Box>

         <Box marginTop="67px" margin="67px 20px 0 21px">
            <Text fontSize="24px">{selectedBook.name}</Text>
            <Text fontSize="16px" color="#FF6978">
               {selectedBook.author}
            </Text>
            <Text marginTop="10px" marginBottom="70px" lineHeight="25px" fontSize="14px">
               {selectedBook.description}
             
            </Text>
         </Box>
         <Box
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
         ></Box>
      </Box>
   );
};

export default Details;
