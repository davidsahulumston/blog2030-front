import React, { Component, Fragment } from "react";
import CardsModel2030 from "../../components/Model2030/CardsModel2030/CardsModel2030";
import { Container } from "@material-ui/core";
import Products from "../../components/Model2030/Products/Products";
export default class Modelo2030 extends Component {
  render() {
    return (
      <Fragment>
        <Container fixed>
          <CardsModel2030 />
          <Products />
        </Container>
      </Fragment>
    );
  }
}
