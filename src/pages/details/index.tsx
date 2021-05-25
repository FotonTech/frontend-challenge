import React from "react";
import { Text, Box, Image, Flex } from "@chakra-ui/react";
import { BookType } from "../../types";
import BackArrow from "./components/backArrow";
import BottomMenuBar from "./components/modalActions";
import { useHistory } from "react-router";
import { useAppSelector } from "../../Redux/hooks";
import UnderlayCircles from "./components/combinedUnderlayCircles";

// import { Container } from './styles';

const Details: React.FC<{ id: string }> = ({ id }) => {
   const history = useHistory();
   const booksFromRedux = useAppSelector((state) => state.db);
   const onClickGoBack = () => {
      history.goBack();
   };
   let selectedBook: BookType = booksFromRedux.books[0];
   const selectedBooksArray = booksFromRedux.books.filter((element) => element.id === id);
   if (!selectedBooksArray || selectedBooksArray.length === 0) {
      alert("Livro inválido.");
      history.push("/");
   } else selectedBook = selectedBooksArray[0];

   return (
      <Box>
         <Box h="282px" width="376px" backgroundColor="#FFF6E5" borderRadius="0 0 130px 0">
            <BackArrow callbackFunction={onClickGoBack} />

            <UnderlayCircles />

            <Image
               borderRadius="md"
               boxShadow="xl"
               top="84px"
               left="113px"
               position="absolute"
               zIndex="overlay"
               objectFit="fill"
               w="151px"
               h="234px"
               src={selectedBook.thumbnail}
            />
         </Box>

         <Box fontFamily="'SF UI Display Medium', sans-serif" marginTop="67px" margin="67px 20px 0 21px">
            <Text fontSize="24px">{selectedBook.name}</Text>
            <Text fontSize="16px" lineHeight="19px" color="#FF6978">
               {selectedBook.author}
            </Text>
            <Text
               fontFamily="SFProText, sans-serif"
               fontWeight="medium"
               color="#31313199"
               marginTop="10px"
               marginBottom="70px"
               lineHeight="25px"
               fontSize="14px"
            >
               {selectedBook.description}
            </Text>
         </Box>
         <BottomMenuBar />
      </Box>
   );
};

export default Details;
