import React from "react";
import { Text, Box, Grid, GridItem, Image } from "@chakra-ui/react";
import theme from "../../../theme";
import { BookType } from "../../../types/index";
// import { Container } from './styles';

type DiscoverBoxType = {
   book: BookType;
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

const DiscoverBox: React.FC<DiscoverBoxType> = ({ book }) => {
   return (
      <Grid
         templateColumns="repeat(3, 1fr)"
         color="#E7E7E1"
         backgroundColor="blue.700"
         width="272px"
         height="139px"
         borderRadius="5px"
      >
         <GridItem colSpan={2} marginLeft="20px">
            <Text {...bookNameProperties} marginTop="17px">
               Hooked
            </Text>
            <Text {...bookAuthorProperties} marginTop="5px">
               Nir Eyal
            </Text>

            <Box fontSize="10px" marginTop="30px">
               <Text as="span" fontWeight="bold">
                  120+{" "}
               </Text>
               <Text as="span"> Read now </Text>
            </Box>
         </GridItem>
         <GridItem margin="15px 20px 13px auto" colSpan={1} marginRight="20px">
            <Image borderRadius="5px" height="111px" src={book.thumbnail} />
         </GridItem>
      </Grid>
   );
};

export default DiscoverBox;
