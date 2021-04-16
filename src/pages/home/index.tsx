import React from "react";
import { ProductType } from "../../types";

const Home = () => {
   let productArray: Array<ProductType> = [];

   //mapeia um card para cada item no array, usando desestruturação, já que sei o tipo de objeto
   const IteradorProdutos = () => {
      return (
         <>
            {/*
            productArray.map((item, key) => (
               < {...item} key={item.id.toString()} />
            )*/}
         </>
      );
   };

   return <React.Fragment></React.Fragment>;
};

export default Home;
