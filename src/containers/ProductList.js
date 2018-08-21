import React from "react";
import { connect } from "react-redux";
import { Row } from "reactstrap";
import Product from "../components/Product";
import { selectProducts } from "../selectors/products";

class ProductList extends React.Component {
  render() {
    return (
      <Row className="product-list">
        {this.props.products.map((products, i) => (
          <Product key={products.id} data={products} />
        ))}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state)
});

export default connect(mapStateToProps)(ProductList);
