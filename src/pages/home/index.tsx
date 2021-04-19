import React, { useEffect, useState } from "react";
import { BookType, BookBeingReadType } from "../../types";
import * as Chakra from "@chakra-ui/react";
import Searchbar from "./components/searchbar";
import Greeting from "./components/greeting";
import { getAllBooks } from "../../actions/bookActions";
import { useAppSelector } from "../../Redux/hooks";
import { useDispatch } from "react-redux";

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
         <Searchbar />
         <Greeting />
      </React.Fragment>
   );
};

export default Home;
