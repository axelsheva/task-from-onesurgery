import React from "react";
import { Col } from "reactstrap";

class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMouseEnter: false
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleMouseEnter() {
    this.setState({ isMouseEnter: true });
  }

  handleMouseLeave() {
    this.setState({ isMouseEnter: false });
  }

  handleRemoveClick() {
    this.props.onRemoveClick(this.props.data.id);
  }

  render() {
    return (
      <Col
        className="product"
        xs="3"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isMouseEnter && (
          <div className="product-remove-btn" onClick={this.handleRemoveClick}>
            x
          </div>
        )}
        <div
          className="product-image"
          style={{ backgroundImage: `url(${this.props.data.imageURL})` }}
        />
        <div className="product-name">
          {`${this.props.data.name}, ${this.props.data.price} грн.`}
        </div>
      </Col>
    );
  }
}

export default Product;
