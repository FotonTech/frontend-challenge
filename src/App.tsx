import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";
import ReduxWrapper from "./Redux/Store";
import Routes from "./Routes";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";

//import Header from "./Components/Header/Navbar";
//import Footer from "./Components/Footer";
import "./App.css";

function App() {
 
   return (
      <ReduxWrapper>
         <BrowserRouter>
            <ChakraProvider theme={theme}>
               <Routes />
            </ChakraProvider>
         </BrowserRouter>
      </ReduxWrapper>
   );
}

export default App;
