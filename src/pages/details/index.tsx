import React from "react";
import { Text, Box, Image, GridItem } from "@chakra-ui/react";
import { BookType } from "../../types/index";
import {ArrowBackIcon} from '@chakra-ui/icons'
import {useHistory} from 'react-router'
import { useAppSelector } from "../../Redux/hooks";

// import { Container } from './styles';

const Details: React.FC<{id: string}> = ({id}) => {
    const history = useHistory();
    const booksFromRedux = useAppSelector(state => state.db);
    const onClickGoBack = () => {
        history.goBack();
    }
    let selectedBook: BookType = booksFromRedux.books[0];
    const selectedBooks = booksFromRedux.books.filter((element)=>element.id === id);
    if(!selectedBooks || selectedBooks.length === 0)
        alert("Livro inválido.")
    else
        selectedBook = selectedBooks[0];

  return <>
  <ArrowBackIcon onClick={onClickGoBack} />
  <h1>{selectedBook.name}</h1>
  </>;
}

export default Details;