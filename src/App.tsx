import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReduxWrapper from "./Redux/Store";
import Routes from "./Routes";

//import Header from "./Components/Header/Navbar";
//import Footer from "./Components/Footer";
import "./App.css";

function App() {
   return (
      <ReduxWrapper>
         <BrowserRouter>
            <Routes />
         </BrowserRouter>
      </ReduxWrapper>
   );
}

export default App;
