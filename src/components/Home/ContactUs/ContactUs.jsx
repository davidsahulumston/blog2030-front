import React, { Fragment } from "react";
import { Paper, Container, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import "./ContactUs.css";

const ContactUs = () => {
  const [values, setValues] = React.useState({
    age: ""
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  return (
    <Fragment>
      <Container fixed>
        <div className="separator"> 
          <div className="imageContainer">
            <div className="textDigital">
              <Typography>
                <span className="textTransformation">
                  ¡Conoce más de transformación digital!{" "}
                </span>
              </Typography>
              <Typography>
                <span className="paragrahTranformation">
                  {" "}
                  observatorio.itesm.mx
                </span>
              </Typography>
              <Typography>
                <span className="paragrahTranformation">
                  {" "}
                  transformaciondigital.itesm.mx
                </span>
              </Typography>
            </div>
          </div>
        </div>

        <Paper className="container">
          <div className="contact">
            <span className="title">
              <Typography variant="h4">Contáctanos</Typography>
            </span>
            <div className="paragraph">
              <Typography>
                ¿Tienes algo en mente? Escríbenos y nos comunicaremos contigo lo
                antes posible
              </Typography>
            </div>
          </div>

          <Container>
            <div>
              <TextField
                id="outlined-dense"
                label="Nombre"
                variant="outlined"
                className="textName"
              />
              <TextField
                id="outlined-email-input"
                label="Email"
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                className="textEmail"
              />
              <span className="textPhone">
                <TextField
                  id="outlined-number"
                  label="Teléfono"
                  value={values.age}
                  onChange={handleChange("age")}
                  type="number"
                  margin="normal"
                  variant="outlined"
                  className="textEmail"
                />
              </span>
              <TextField
                id="outlined-dense"
                label="Mensaje"
                variant="outlined"
                multiline
                className="textMessage"
              />
              <div className="buttonSend">
                <Button variant="contained" color="primary" className="button">
                  Enviar
                </Button>
              </div>
            </div>
          </Container>
        </Paper>
      </Container>
    </Fragment>
  );
};

export default ContactUs;
