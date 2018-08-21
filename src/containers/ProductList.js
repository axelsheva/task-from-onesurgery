import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";

import Product from "../components/Product";
import { selectProducts } from "../selectors/products";
import { removeProduct } from "../actions/products";

class ProductList extends React.Component {
  render() {
    return (
      <Row className="product-list">
        {this.props.products.map((product, i) => (
          <Product
            key={product.id}
            data={product}
            onRemoveClick={this.props.removeProduct}
          />
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state)
});

const actions = { removeProduct };

export default connect(
  mapStateToProps,
  actions
)(ProductList);
