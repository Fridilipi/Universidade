import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/";
import Home from "../Pages/Home/";
import ConsultarNotas from "../Pages/ConsultarNotas/";
import CadastrarNotas from "../Pages/CadastrarNotas/";
import ListarNotas from "../Pages/ListarNotas/";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Home" exact component={Home} />
        <Route path="/consultar-nota" component={ConsultarNotas} />
        <Route path="/cadastrarNotas" component={CadastrarNotas} />
        <Route path="/listarNotas" component={ListarNotas} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
