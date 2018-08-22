import React from "react";
import { Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";

import { addProduct } from "../actions/products";
import { selectIngredientsByIds } from "../selectors/ingredients";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Мой Гамбургер",
      imageURL:
        "https://cdn.pizket.com/images/photo/256x256/5389923e674422d00de9adf1e44c0acf.jpg",
      ingredientsIds: []
    };

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

  handleIngredientClick(id) {
    const { ingredientsIds } = this.state;
    const includes = ingredientsIds.includes(id);

    if (includes) {
      this.setState({
        ingredientsIds: ingredientsIds.filter(
          ingredientId => ingredientId !== id
        )
      });
    } else {
      this.setState({ ingredientsIds: [...ingredientsIds, id] });
    }
  }

  renderIngredients() {
    return (
      <FormGroup>
        <Label for="productIngredients">
          Ингредиенты: (нажмите для добавления / удаления)
        </Label>
        {this.props.ingredients.map(ingredient => {
          const { ingredientsIds } = this.state;
          const includes = ingredientsIds.includes(ingredient.id);
          const className = includes
            ? "ingredient-btn selected-ingredient"
            : "ingredient-btn";

          return (
            <div
              className={className}
              key={ingredient.id}
              onClick={this.handleIngredientClick.bind(this, ingredient.id)}
            >
              {ingredient.name}, {ingredient.price} грн.
            </div>
          );
        })}
      </FormGroup>
    );
  }

  renderPrice() {
    const ingredients = selectIngredientsByIds(
      this.props,
      this.state.ingredientsIds
    );
    const price = ingredients.reduce((prev, cur) => prev + cur.price, 0);

    return <FormGroup>Цена: {price} грн.</FormGroup>;
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
            </FormGroup>
            <FormGroup>
              <Label for="productImageURL">Ссылка на изображение</Label>
              <Input
                type="text"
                name="imageURL"
                value={this.state.imageURL}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            {this.renderIngredients()}
            {this.renderPrice()}
            <Button type="submit" onClick={this.handleSubmit}>
              Добавить
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  ingredients: state.ingredients
});

const actions = {
  addProduct
};

export default connect(
  mapStateToProps,
  actions
)(AddProduct);
