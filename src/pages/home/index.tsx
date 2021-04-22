import React, { useEffect, useState } from "react";
import { BookType, BookBeingReadType } from "../../types";
import { Box, Grid, GridItem, useTheme } from "@chakra-ui/react";
import Searchbar from "../../components/searchbar";
import BookCard from "../../components/bookCard";
import Greeting from "./components/greeting";
import DiscoverBox from "./components/discoverBox";
import Label from "./components/twoColumnText";
import LowerNav from "../../components/lowerNav";
import ReviewsOfTheDay from "./components/reviewsOfTheDay";
import CurrentlyReading from "./components/curruentlyReading";
import sortBooks from "../../utils/sortBooks";

import { useAppSelector } from "../../Redux/hooks";

const Home = () => {
   const [searchQuery, setSearchQuery] = useState("");

   //seletor type safe do redux
   const books = useAppSelector((state) => state.db.books);
   const sortedBooks = books.sort(sortBooks("name", "asc"));
   const bookRead: BookBeingReadType = {
      currentChapter: 2,
      book: sortedBooks[0],
      totalChapters: 9,
   };
   //mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
   const BooksIterator = () => {
      //pesquisar dentro do array se há a query
      let author, name;
      const filteredBooks = books.filter((element) => {
         author = element?.author?.toLowerCase();
         name = element?.name?.toLowerCase();
         return (author && author.includes(searchQuery)) || (name && name.includes(searchQuery));
      });
      return (
         <>
            <Grid alignContent="space-between" columnGap="10px" rowGap="10px" templateColumns="repeat(3, 1fr)">
               {filteredBooks.map((item, key) => (
                  <BookCard {...item} key={item.id.toString()} />
               ))}
            </Grid>
         </>
      );
   };

   const BasicHomeComponents = () => {
      if (searchQuery) {
         return <BooksIterator />;
      }

      return (
         <>
            <Greeting />
            <Label leftText="Discover new book" rightText="More" />
            <DiscoverBox book={sortedBooks[0]} />
            <Label marginTop="30px" leftText="Currently Reading" rightText="All" />
            <CurrentlyReading currentBook={bookRead} />
            <Label marginTop="30px" leftText="Reviews of The Days" rightText="All Video" />
            <ReviewsOfTheDay />
         </>
      );
   };

   return (
      <React.Fragment>
         <Searchbar search={searchQuery} setSearch={setSearchQuery} />
         <BasicHomeComponents />
         <LowerNav />
      </React.Fragment>
   );
};

export default Home;
