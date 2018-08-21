import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import Header from "../components/Header";
import ProductList from "../containers/ProductList";
import AddProduct from "../containers/AddProduct";

const routes = (
  <div>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add-product" component={AddProduct} />
      </Switch>
    </Container>
  </div>
);

export default routes;
