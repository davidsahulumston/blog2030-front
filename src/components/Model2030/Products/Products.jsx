import React, { Fragment } from "react";
import { Paper, Container } from "@material-ui/core";
import "./Products.css";

export default function Products() {
  return (
    <Fragment>
      <div className="detachmentProducts">
        <Paper>
          <Container fixed>
            <h2 className="titleProducts">Productos</h2>
            <div className="containerProducts">
              <div>Check-list de insights de MP yLP</div>
              <div>Escenarios</div>
              <div>Prototipos POCs</div>
              <div>Pilotos small "i"</div>
              <div>Pilotos big "i"</div>
            </div>
          </Container>
        </Paper>
      </div>

      <Paper>
        <Container fixed>
          <h2 className="titleProducts">Resultados</h2>
          <div className="containerProducts">
            <div>Agenda de mediana y largo plazo</div>
          </div>
        </Container>
      </Paper>
    </Fragment>
  );
}
