import React, { Fragment } from "react";
import { Grid, Paper, Container } from "@material-ui/core";
import "./CardsModel2030.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function CardsModel2030() {
  return (
    <Fragment>
      <div className="ideasTitle">Modelo 2030</div>
    
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className="cardModel">
            <Container>
              <h1>Investigación</h1>
              <div>
                <div className="upperTextModel">Observatorios de futuro</div>
                <div className="upperTextModel">Think Tank globales</div>
                <div className="upperTextModel">
                  Líderes de industria con tecnología
                </div>
                <div className="iconExpand">
                  <ExpandMoreIcon style={{ fontSize: 40 }} />{" "}
                </div>
                <hr />
                <div className="textBelow">
                  <div className="textBelow">Macrotendencias & tendencias</div>
                  <div className="textBelow">
                    Benchmark: estrategia de otros
                  </div>
                  <div className="textBelow">Radar tecnológico</div>
                  <div className="textBelow">Inteligencia competitiva</div>
                  <div className="iconExpand">
                    <ExpandMoreIcon style={{ fontSize: 40 }} />
                  </div>
                </div>
              </div>
            </Container>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="cardModel">
            <Container>
              <h1>Ciclo de innovación</h1>
              <div>
                <div className="upperTextModel">
                  Input del equipo de innovación
                </div>
                <div className="upperTextModel">Input patentes</div>
                <div className="upperTextModel">Input de equipo interno</div>
                <div className="upperTextModel">
                  Consultaría en innov & estrategia
                </div>
                <div className="iconExpand">
                  <ExpandMoreIcon style={{ fontSize: 40 }} />{" "}
                </div>
                <hr />
                <div className="textBelow">
                  <div className="textBelow">Insight de MP & LP</div>
                  <div className="textBelow">
                    Ideas de proyectos / Quick Hits
                  </div>
                  <div className="textBelow">
                    Sugerencias de uso de tecnologías
                  </div>
                  <div className="iconExpand">
                    <ExpandMoreIcon style={{ fontSize: 40 }} />
                  </div>
                </div>
              </div>
            </Container>
          </Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className="cardModel">
            <Container>
              <h1>Insight interno</h1>
              <div>
                <div className="upperTextModel">
                  Identificación necesidades alumnos
                </div>
                <div className="upperTextModel">Workshop con cliente</div>
                <div className="upperTextModel">Mapeo de preferencias</div>
                <div className="upperTextModel">modelo de datos</div>
                <div className="upperTextModel">
                  Identificación de alertas tempranas
                </div>
                <div className="iconExpand">
                  <ExpandMoreIcon style={{ fontSize: 40 }} />{" "}
                </div>
                <hr />
                <div className="textBelow">
                  <div className="textBelow">
                    Necesidades de alumnos y clientes
                  </div>
                  <div className="textBelow">Ideas de proyectos</div>
                  <div className="textBelow">Quick Hits</div>
                  <div className="iconExpand">
                    <ExpandMoreIcon style={{ fontSize: 40 }} />
                  </div>
                </div>
              </div>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
}
