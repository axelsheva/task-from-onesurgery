import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "../containers/ProductList";
import AddProduct from "../containers/AddProduct";
import AddIngredient from "../containers/AddIngredient";
import ProductDetails from "../containers/ProductDetails";

const routes = (
  <div>
    <Header />
    <Container className="content">
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add-product" component={AddProduct} />
        <Route path="/add-ingredient" component={AddIngredient} />
        <Route path="/products/:id" component={ProductDetails} />
      </Switch>
    </Container>
    <Footer />
  </div>
);

export default routes;
