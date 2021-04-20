import React, { useEffect, useState } from "react";
import { BookType, BookBeingReadType } from "../../types";
import {Box, useTheme} from "@chakra-ui/react";
import Searchbar from "./components/searchbar";
import Greeting from "./components/greeting";
import DiscoverBox from "./components/discoverBox";
import Label from "./components/twoColumnText";
import LowerNav from '../../components/lowerNav';


import { getAllBooks } from "../../actions/bookActions";
import { useAppSelector } from "../../Redux/hooks";
import { useDispatch } from "react-redux";


//componente para emular a largura da página conforme o layout figma
const PageWrapper: React.FC = (props) => {
   const theme = useTheme();
   
   return (
      <Box width="100%" height="100%" display="flex" alignContent="center" justifyContent="center">
         <Box
            width="375px"
            height="812px"
            backgroundColor={theme.colors.backgroundColor}
            boxShadow="md"
           
         >
            {props.children}
         </Box>
      </Box>
   );
};

//componente para emular a largura da página conforme o layout figma
const PaddingWrapper: React.FC = ( props ) => {
   
   return (
      <Box padding="0 20px">
        {props.children}
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
            <PaddingWrapper>
         <Searchbar />
         <Greeting />
         <Label leftText="Discover new book"  rightText="More"  />
         <DiscoverBox book={books[4]} />
         <Label marginTop="30px" leftText="Currently Reading"  rightText="All"  />
      
         <Label marginTop="30px" leftText="Reviews of The Days"  rightText="All Video"  />
     </PaddingWrapper>
         <LowerNav />
         </PageWrapper>
      </React.Fragment>
   );
};

export default Home;
