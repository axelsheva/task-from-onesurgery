import React from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import Product from "../components/Product";
import { selectBurgers } from "../selectors/burgers";

class ProductList extends React.Component {
  render() {
    return (
      <Container>
        <Row className="product-list">
          {this.props.burgers.map((burger, i) => (
            <Product key={burger.id} data={burger} />
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  burgers: selectBurgers(state)
});

export default connect(mapStateToProps)(ProductList);
