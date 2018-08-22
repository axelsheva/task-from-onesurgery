import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

import { addIngredient, removeIngredient } from "../actions/ingredients";

class AddIngredient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "сыр",
      price: 6
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.addIngredient(this.state);
  }

  handleRemoveClick(id) {
    this.props.removeIngredient(id);
  }

  renderIngredients() {
    return (
      <div className="remove-ingredient-list">
        <p>Ингредиенты: (нажмите для удаления)</p>
        {this.props.ingredients.map(ingredient => (
          <div
            className="ingredient-btn"
            key={ingredient.id}
            onClick={this.handleRemoveClick.bind(this, ingredient.id)}
          >
            {ingredient.name}, {ingredient.price} грн.
          </div>
        ))}
      </div>
    );
  }

  render() {
    return (
      <Row className="add-ingredient">
        <Col xs="3" />
        <Col xs="6">
          <p>Добавление ингредиента</p>
          <Form>
            <FormGroup>
              <Label for="ingredientName">Название</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="ingredientPrice">Цена</Label>
              <Input
                type="number"
                name="price"
                value={this.state.price}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button type="submit" onClick={this.handleSubmit}>
              Добавить
            </Button>
          </Form>
          {this.renderIngredients()}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

const actions = {
  addIngredient,
  removeIngredient
};

export default connect(
  mapStateToProps,
  actions
)(AddIngredient);
