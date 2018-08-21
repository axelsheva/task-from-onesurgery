import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

import { addProduct } from "../actions/products";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: "", imageURL: "" };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addProduct(this.state);
    this.props.history.push("/");
  }

  render() {
    return (
      <Row className="add-product">
        <Col xs="3" />
        <Col xs="6">
          <p>Добавление продукта</p>
          <Form>
            <FormGroup>
              <Label for="productName">Название</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
              <Label for="productImageURL">Ссылка на изображение</Label>
              <Input
                type="text"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button type="submit" onClick={this.handleSubmit}>
              Добавить
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const actions = {
  addProduct
};

export default connect(
  null,
  actions
)(AddProduct);
