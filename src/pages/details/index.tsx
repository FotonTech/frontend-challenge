import React from "react";
import { Text, Box, Image, GridItem, Flex } from "@chakra-ui/react";
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
            <Box position="absolute" marginTop="55px" marginLeft="33px" onClick={onClickGoBack}>
               <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 8H1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                     d="M8 15L1 8L8 1"
                     stroke="black"
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                  />
               </svg>
            </Box>
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
            <Text fontSize="16px" lineHeight="19px" fontWeight="normal" color="#FF6978">
               {selectedBook.author}
            </Text>
            <Text marginTop="10px" marginBottom="70px" lineHeight="25px" fontSize="14px">
               {selectedBook.description}
            </Text>
         </Box>
         <BottomMenuBar />
      </Box>
   );
};

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
         {
            // primeiro box, contendo o icone de read
         }
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 0H4.8C6.56731 0 8 1.59188 8 3.55556V16C8 14.5272 6.92548 13.3333 5.6 13.3333H0V0Z"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16 0H11.2C9.43269 0 8 1.59188 8 3.55556V16C8 14.5272 9.07452 13.3333 10.4 13.3333H16V0Z"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>

            <Text marginLeft="10px" as="span">
               Read
            </Text>
         </Box>

         {
            //linha vertical
         }
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1V17" stroke="#979797" stroke-opacity="0.2" stroke-linecap="square" />
            </svg>
         </Box>

         {
            //segunda box, contendo listen e icone
         }
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M0 13.3333V8C6.58375e-08 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8V13.3333"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path
                  d="M15 10.7778H16C16 10.2255 15.5523 9.77783 15 9.77783V10.7778ZM1 10.7778V9.77783C0.447715 9.77783 0 10.2255 0 10.7778H1ZM13.5556 11.5556C13.5556 11.6783 13.4561 11.7778 13.3333 11.7778V9.77783C12.3515 9.77783 11.5556 10.5738 11.5556 11.5556H13.5556ZM13.5556 14.2223V11.5556H11.5556V14.2223H13.5556ZM13.3333 14.0001C13.4561 14.0001 13.5556 14.0995 13.5556 14.2223H11.5556C11.5556 15.2041 12.3515 16.0001 13.3333 16.0001V14.0001ZM14.2222 14.0001H13.3333V16.0001H14.2222V14.0001ZM14 14.2223C14 14.0995 14.0995 14.0001 14.2222 14.0001V16.0001C15.2041 16.0001 16 15.2041 16 14.2223H14ZM14 10.7778V14.2223H16V10.7778H14ZM13.3333 11.7778H15V9.77783H13.3333V11.7778ZM13.3333 7.77783C11.2469 7.77783 9.55556 9.4692 9.55556 11.5556H11.5556C11.5556 10.5738 12.3515 9.77783 13.3333 9.77783V7.77783ZM16 7.77783H13.3333V9.77783H16V7.77783ZM18 9.77783C18 8.67326 17.1046 7.77783 16 7.77783V9.77783H18ZM18 14.2223V9.77783H16V14.2223H18ZM14.2222 18.0001C16.3086 18.0001 18 16.3087 18 14.2223H16C16 15.2041 15.2041 16.0001 14.2222 16.0001V18.0001ZM13.3333 18.0001H14.2222V16.0001H13.3333V18.0001ZM9.55556 14.2223C9.55556 16.3087 11.2469 18.0001 13.3333 18.0001V16.0001C12.3515 16.0001 11.5556 15.2041 11.5556 14.2223H9.55556ZM9.55556 11.5556V14.2223H11.5556V11.5556H9.55556ZM0 7.77783C-1.10457 7.77783 -2 8.67326 -2 9.77783H0V7.77783ZM2.66667 7.77783H0V9.77783H2.66667V7.77783ZM6.44444 11.5556C6.44444 9.4692 4.75308 7.77783 2.66667 7.77783V9.77783C3.64851 9.77783 4.44444 10.5738 4.44444 11.5556H6.44444ZM6.44444 14.2223V11.5556H4.44444V14.2223H6.44444ZM2.66667 18.0001C4.75308 18.0001 6.44444 16.3087 6.44444 14.2223H4.44444C4.44444 15.2041 3.64851 16.0001 2.66667 16.0001V18.0001ZM1.77778 18.0001H2.66667V16.0001H1.77778V18.0001ZM-2 14.2223C-2 16.3087 -0.308631 18.0001 1.77778 18.0001V16.0001C0.795938 16.0001 0 15.2041 0 14.2223H-2ZM-2 9.77783V14.2223H0V9.77783H-2ZM2 14.2223V10.7778H0V14.2223H2ZM1.77778 14.0001C1.90051 14.0001 2 14.0995 2 14.2223H0C0 15.2041 0.795938 16.0001 1.77778 16.0001V14.0001ZM2.66667 14.0001H1.77778V16.0001H2.66667V14.0001ZM2.44444 14.2223C2.44444 14.0995 2.54394 14.0001 2.66667 14.0001V16.0001C3.64851 16.0001 4.44444 15.2041 4.44444 14.2223H2.44444ZM2.44444 11.5556V14.2223H4.44444V11.5556H2.44444ZM2.66667 11.7778C2.54394 11.7778 2.44444 11.6783 2.44444 11.5556H4.44444C4.44444 10.5738 3.64851 9.77783 2.66667 9.77783V11.7778ZM1 11.7778H2.66667V9.77783H1V11.7778Z"
                  fill="#CFCBD2"
               />
            </svg>

            <Text marginLeft="10px" as="span">
               Listen
            </Text>
         </Box>
         {
            // linha vertical
         }
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 1V17" stroke="#979797" stroke-opacity="0.2" stroke-linecap="square" />
            </svg>
         </Box>
         {
            //box final, contendo share e icone
         }
         <Box display="flex" flexDirection="row" justifyContent="center" alignContent="center" alignItems="center">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M0 8V14.4C0 15.2837 0.716344 16 1.6 16H11.2C12.0837 16 12.8 15.2837 12.8 14.4V8"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path
                  d="M9.60001 3.2L6.40001 0L3.20001 3.2"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
               <path
                  d="M6.40002 0V10.4"
                  stroke="#CFCBD2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
               />
            </svg>

            <Text marginLeft="10px" as="span">
               Share
            </Text>
         </Box>
      </Flex>
   );
};

export default Details;
