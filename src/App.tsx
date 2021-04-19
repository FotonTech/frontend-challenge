import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReduxWrapper from "./Redux/Store";
import Routes from "./Routes";
import { ChakraProvider, Box } from "@chakra-ui/react"
import theme from './theme';

//import Header from "./Components/Header/Navbar";
//import Footer from "./Components/Footer";
import "./App.css";

type WrapperType = {
   children?: React.ReactNode
}
//componente para emular a largura da página conforme o layout figma
const PageWrapper: React.FC<WrapperType> = ({children}) => {
   return(
   <Box width="100%" height="100%" display="flex" alignContent="center" justifyContent="center">  
<Box width="375px" height="812px" backgroundColor={theme.colors.backgroundColor} boxShadow="md" padding="0 20px">
   {children}
   </Box>
   </Box> 
   )
}



function App() {
   return (
      <ReduxWrapper>
         <BrowserRouter>
         <ChakraProvider theme={theme}>
            <PageWrapper>
             <Routes />
             </PageWrapper>
            </ChakraProvider>
         </BrowserRouter>
      </ReduxWrapper>
   );
}

export default App;
