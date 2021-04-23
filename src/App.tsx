import React from "react";

import { BrowserRouter } from "react-router-dom";
import ReduxWrapper from "./Redux/Store";
import Routes from "./Routes";
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "./theme";


//componente para emular a largura da página conforme o layout figma
const PageWrapper: React.FC = (props) => {
   /**
    * Coloco position relative para manter os itens absolutos no lugar
    * Os overflows x e y servem para o scroll da página
    * E encontra-se dentro de um wrapper cinza para melhorar a visualização
    *
    * Em relação aos dois divs, um com o tamanho correto e outro dentro, uso eles para criar um scroll
    * mobile-like, sem a scrollbar, usando um truque de margem negativa e padding.
    *
    */

   return (
      <Box
         backgroundColor="gray.300"
         width="100%"
         height="130vh"
         display="flex"
         justifyContent="center"
         alignItems="center"
         justifyItems="center"
      >
         <Box
            width="375px"
            height="812px"
            overflow="hidden"
            position="relative"
            overflowX="hidden"
            overflowY="scroll"
            backgroundColor={theme.colors.backgroundColor}
            boxShadow="md"
            css={{
               "&::-webkit-scrollbar": {
                  display: "none",
               },
               "&::-webkit-scrollbar-track": {
                  display: "none",
               },
            }}
         >
            {props.children}
         </Box>
      </Box>
   );
};

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
