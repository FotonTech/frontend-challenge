import React, { useEffect, useState } from "react";
import { BookType, BookBeingReadType } from "../../types";
import { Box, useTheme } from "@chakra-ui/react";
import Searchbar from "./components/searchbar";
import Greeting from "./components/greeting";
import DiscoverBox from "./components/discoverBox";
import Label from "./components/twoColumnText";
import LowerNav from "../../components/lowerNav"
import CurrentlyReading from "./components/curruentlyReading";
import sortBooks from '../../utils/sortBooks';
import { getAllBooks } from "../../Redux/actions/bookActions"
import { useAppSelector } from "../../Redux/hooks";
import { useDispatch } from "react-redux";

//componente para emular a largura da página conforme o layout figma
const PageWrapper: React.FC = (props) => {
   const theme = useTheme();

   return (
      <Box backgroundColor="gray.300" width="100%" height="100%" display="flex" alignContent="center" justifyContent="center">
         <Box width="375px" height="812px" backgroundColor={theme.colors.backgroundColor} boxShadow="md">
            {props.children}
         </Box>
      </Box>
   );
};



const Home = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");

   const dispatch = useDispatch();

   //fazer a chamada para a api no  carregamento do componente
   useEffect(() => {
      dispatch(getAllBooks(setLoading, setError));
   }, [setLoading, setError, dispatch]);

   //seletor type safe do redux
   const books = useAppSelector((state) => state.db.books);
   const sortedBooks = books.sort(sortBooks("name", "asc"))
   const bookRead: BookBeingReadType = {
      currentChapter: 2,
      book: sortedBooks[0],
      totalChapters: 9,
   };
   //mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
   const BooksIterator = () => {
      return (
         <>
            {/*
            productArray.map((item, key) => (
               < {...item} key={item.id.toString()} />
            )*/}
         </>
      );
   };

   return (
      <React.Fragment>
         <PageWrapper>
            
               <Searchbar />
               <Greeting />
               <Label leftText="Discover new book" rightText="More" />
               <DiscoverBox book={sortedBooks[0]} />
               <Label marginTop="30px" leftText="Currently Reading" rightText="All" />
               <CurrentlyReading currentBook={bookRead} />
               <Label marginTop="30px" leftText="Reviews of The Days" rightText="All Video" />
              
           
            <LowerNav />
         </PageWrapper>
      </React.Fragment>
   );
};

export default Home;
