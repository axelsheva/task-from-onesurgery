import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import Header from "../components/Header";
import ProductList from "../containers/ProductList";
import AddProduct from "../containers/AddProduct";
import AddIngredient from "../containers/AddIngredient";
import ProductDetails from "../containers/ProductDetails";

const routes = (
  <div>
    <Header />
    <Container>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/add-ingredient" component={AddIngredient} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    </Container>
  </div>
);

export default routes;
