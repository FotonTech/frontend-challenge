import React from "react";

import * as Chakra from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";

const Searchbar: React.FC<{ search: string; setSearch: (arg: string) => void }> = ({ search, setSearch }) => {
   return (
      <Box margin="50px 20px 0 20px">
         <Chakra.InputGroup outlineColor="blue.400">
            <Chakra.InputLeftElement
               pointerEvents="none"
               children={<SearchIcon transform="rotate(90deg)" color="gray.300" />}
            />
            <Chakra.Input
               backgroundColor="white"
               type="text"
               placeholder="Search book"
               color="black"
               value={search}
               onChange={(e) => setSearch(e.target.value.toLowerCase())}
               _placeholder={{ color: "black" }}
            />
         </Chakra.InputGroup>
      </Box>
   );
};

export default Searchbar;
