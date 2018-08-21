import React from "react";
import { Col } from "reactstrap";

export default class Product extends React.Component {
  render() {
    return (
      <Col className="product" xs="3">
        <div
          className="product-image"
          style={{ backgroundImage: `url(${this.props.data.img})` }}
        />
        <div className="product-name">{this.props.data.name}</div>
      </Col>
    );
  }
}
