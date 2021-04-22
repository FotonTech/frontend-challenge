import React, { useEffect, useState } from "react";
import { BookType, BookBeingReadType } from "../../types";
import { Box, Flex, Grid, GridItem, useTheme, Image } from "@chakra-ui/react";
import Searchbar from "../../components/searchbar";
import BookCard from "../../components/bookCard";
import Greeting from "./components/greeting";
import DiscoverBox from "./components/discoverBox";
import Label from "./components/twoColumnText";
import LowerNav from "../../components/lowerNav";
import ReviewsOfTheDay from "./components/reviewsOfTheDay";
import CurrentlyReading from "./components/curruentlyReading";
import sortBooks from "../../utils/sortBooks";
import Circle from "../../components/circle.png";
import { useAppSelector } from "../../Redux/hooks";

const Home = () => {
   const [searchQuery, setSearchQuery] = useState("");

   //seletor type safe do redux
   const books = useAppSelector((state) => state.db.books);
   const sortedBooks = books.sort(sortBooks("name", "asc"));
   const rand1 = Math.floor(Math.random() * books.length);
   const rand2 = Math.floor(Math.random() * books.length);
   const rand3 = Math.floor(Math.random() * books.length);

   const bookRead: BookBeingReadType = {
      currentChapter: 2,
      book: sortedBooks[rand1],
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
            <Grid
               margin="40px 12px 40px 20px"
               alignContent="space-between"
               columnGap="10px"
               rowGap="10px"
               templateColumns="repeat(3, 1fr)"
            >
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
            <Image marginTop="-55px" marginLeft="300px" position="absolute" zIndex="0" src={Circle} />

            <Box zIndex="2">
               <Flex alignContent="center" alignItems="center" flexWrap="nowrap">
                  <DiscoverBox book={sortedBooks[rand3]} />

                  <Box>
                     <DiscoverBox
                        backgroundColor="#150e56"
                        transparency={true}
                        paddingTopAndBottom="5.5"
                        book={sortedBooks[rand2]}
                        marginLeftText="15px"
                     />
                  </Box>
               </Flex>
            </Box>
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
