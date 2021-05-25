import React from "react";
import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";

import { BookType } from "../../../types/index";
import Circle from "../../../components/circle.png";
import RedRectangle from '../svgComponents/redRectangle'
import BlueCircle from '../svgComponents/blueCircle'
import CutCircle from "../../../components/cutCircle.png";
import { useHistory } from "react-router";

type DiscoverBoxType = {
   book: BookType;
   paddingTopAndBottom?: string;
   backgroundColor?: string;
   transparency?: boolean;
   marginLeftText?: string;
};

const bookNameProperties = {
   lineHeight: "35.99px",
   letterSpacing: "2px",
   fontSize: "27px",
   fontFamily: "'Playfair Display', sans-serif",
   fontWeight: "700",
};
const bookAuthorProperties = {
   lineHeight: "16,41px",
   letterSpacing: "1.29 px",
   fontSize: "14px",
   fontStyle: "italic",
};

const DiscoverBox: React.FC<DiscoverBoxType> = ({
   book,
   backgroundColor = "#00173D",
   paddingTopAndBottom = "0",
   transparency = false,
   marginLeftText = "20px",
}) => {
   const newHeight = (Number("139") - Number(paddingTopAndBottom) * 2).toString() + "px";
   const history = useHistory();
   const onClickItem = () => {
      history.push(`/details/${book.id}`);
   };
   return (
      <Box>
         <Grid
            templateColumns="repeat(3, 1fr)"
            color="#E7E7E1"
            backgroundColor={backgroundColor}
            width="272px"
            marginLeft="20px"
            height={newHeight}
            opacity={transparency ? "0.85" : "1"}
            borderRadius="5px"
            alignContent="center"
         >
            <Box position="absolute" zIndex="overlay" margin="95.5px 82.2px 28.5px 144.2px">
               <RedRectangle />
            </Box>

            <Box position="absolute" zIndex="overlay" margin="3.8px 70.73px 106.99px 168.5px">
               <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     fill-rule="evenodd"
                     clip-rule="evenodd"
                     d="M3.81349 0.795898L0.5 29.0133L33.3682 7.67883L3.81349 0.795898Z"
                     fill="#FCBC48"
                  />
               </svg>
            </Box>

            <Box position="absolute" zIndex="overlay" margin="14px 110px 107px 144px">
              <BlueCircle />
            </Box>

            {/*
            Isso aqui DEVERIA funcionar, vou verificar com um post no stackoverflow depois.
         <Box sx={{overflow: "hidden !important"}}  position="absolute"  margin="25px 170px -13px -25px">
            <Image objectFit="cover" src={Circle} height="127px" width="127px"  />
         </Box>
         */}
            <Box sx={{ overflow: "hidden !important" }} position="absolute" margin="25px 170px 0 0">
               <Image src={CutCircle} />
            </Box>

            <GridItem zIndex="2" colSpan={2} marginLeft={marginLeftText}>
               <Text
                  {...bookNameProperties}
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  marginTop="17px"
               >
                  {book?.name}
               </Text>
               <Text
                  {...bookAuthorProperties}
                  fontFamily="'SF UI Display Light', sans-serif"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  overflow="hidden"
                  marginTop="5px"
               >
                  {book?.author}
               </Text>

               <Box fontSize="10px" marginTop="30px">
                  <Box
                     display="inline"
                     as="svg"
                     marginRight="2px"
                     width="16px"
                     height="16px"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M2.66667 11.3333V3.66665C2.66667 3.11436 3.11438 2.66665 3.66667 2.66665H12.3333C12.8856 2.66665 13.3333 3.11436 13.3333 3.66665V12.3333C13.3333 12.8856 12.8856 13.3333 12.3333 13.3333H3.33333C2.96514 13.3333 2.66667 13.6318 2.66667 14C2.66667 14.3682 2.96514 14.6666 3.33333 14.6666H12.3333C13.622 14.6666 14.6667 13.622 14.6667 12.3333V3.66665C14.6667 2.37798 13.622 1.33331 12.3333 1.33331H3.66667C2.378 1.33331 1.33333 2.37798 1.33333 3.66665V11.3333C1.33333 11.7015 1.63181 12 2 12C2.36819 12 2.66667 11.7015 2.66667 11.3333Z"
                        fill="white"
                        fill-opacity="0.653491"
                     />
                     <path
                        d="M4.33333 8.66667V10.6667C4.33333 11.0349 4.63181 11.3333 5 11.3333C5.36819 11.3333 5.66667 11.0349 5.66667 10.6667V8.66667C5.66667 8.29848 5.36819 8 5 8C4.63181 8 4.33333 8.29848 4.33333 8.66667Z"
                        fill="#C8C8C8"
                     />
                     <path
                        d="M10.3333 7.33335V10.6667C10.3333 11.0349 10.6318 11.3334 11 11.3334C11.3682 11.3334 11.6667 11.0349 11.6667 10.6667V7.33335C11.6667 6.96516 11.3682 6.66669 11 6.66669C10.6318 6.66669 10.3333 6.96516 10.3333 7.33335Z"
                        fill="#C8C8C8"
                     />
                     <path
                        d="M7.33333 5.33335V10.6667C7.33333 11.0349 7.63181 11.3334 8 11.3334C8.36819 11.3334 8.66667 11.0349 8.66667 10.6667V5.33335C8.66667 4.96516 8.36819 4.66669 8 4.66669C7.63181 4.66669 7.33333 4.96516 7.33333 5.33335Z"
                        fill="#C8C8C8"
                     />
                     <circle cx="11" cy="5.33335" r="0.666667" fill="#C8C8C8" />
                  </Box>

                  <Text as="span" fontWeight="heading">
                     {book?.pageCount}+{" "}
                  </Text>
                  <Text as="span" fontFamily="'SF UI Display Light', sans-serif">
                     {" "}
                     Read now{" "}
                  </Text>
               </Box>
            </GridItem>
            <GridItem margin="15px 20px 13px auto" colSpan={1} marginRight="20px">
               <Image cursor="pointer" onClick={onClickItem} borderRadius="5px" height="111px" src={book?.thumbnail} />
            </GridItem>
         </Grid>
      </Box>
   );
};

export default DiscoverBox;
