import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllBooks } from "./Redux/actions/bookActions"
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Details from './pages/details';

import NotFound from "./pages/notFound";

const Routes = () => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState("");
   const dispatch = useDispatch();
   //fazer a chamada para a api no  carregamento do componente
   useEffect(() => {
      dispatch(getAllBooks(setLoading, setError));
      console.log("Requisicao feita")
   }, [setLoading, setError, dispatch]);
   /*
   const dispatch = useDispatch();
   useEffect(() => {
      //colocaria aqui a chamada da api para recuperação dos produtos.
      //como não a possuo, vou apenas enviar os jsons para um banco de dados
      //combinado no redux.
   }, []);
   */

   return (
      <div>
         <Switch>
            <Route path="/" exact={true} component={() => <Home />} />
            <Route exact path="/details/:id" render={(props) => <Details id={props.match.params.id} />} />
            <Route path="*" component={() => <NotFound />} />
         </Switch>
      </div>
   );
};

export default Routes;
