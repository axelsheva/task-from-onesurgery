import React, { Component } from "react";

import Header from "./Header";
import ProductList from "../containers/ProductList";

class App extends Component {
  render() {
    return [<Header key="header" />, <ProductList key="content" />];
  }
}

export default App;
