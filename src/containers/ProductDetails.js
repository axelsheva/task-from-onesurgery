import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

import { selectProductById } from "../selectors/products";

class ProductDetails extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <Row className="product-details">
        <Col>
          <h3>{product.name}</h3>
          <div
            className="product-image"
            style={{ backgroundImage: `url(${product.imageURL})` }}
          />
          <div>
            Ингридиенты:{" "}
            {product.ingredients.map(ingredient => ingredient.name).join(", ")}
            {"."}
          </div>
          <div>Цена: {product.price} грн.</div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state, props) => ({
  product: selectProductById(state, props.match.params.id)
});

export default connect(mapStateToProps)(ProductDetails);
