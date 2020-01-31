import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
import "./Footer.css";
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";



const Footer = () => {
  // const classes = useStyles();
  return (
    <Fragment>
      <div className="space">
        <Grid item xs={12}>
          <Paper className="footerColor">
            <Container className="containerFooter">
              <div>
                <Typography className="firstTitle">Blog 2030</Typography>
                <Typography className="subtitleOne">
                  Avenida Siempre viva #742, Mty, N.L
                </Typography>
                <Typography className="subtitleOne">01 33 1234 5678</Typography>
                <Typography className="subtitleOne">
                  idea@blog2030.com
                </Typography>
              </div>
              <div>
                <Typography className="firstTitle">Navegar</Typography>
                <Typography className="subtitleOne">Modelo 2030</Typography>
                <Typography className="subtitleOne">Blog</Typography>
                <Typography className="subtitleOne">Agenda</Typography>
                <Typography className="subtitleOne">Tus videos</Typography>
              </div>
              <div>
                <Typography className="firstTitle">
                  Comparte el ingenio
                </Typography>
                <div>
                <Link className="text-reset" to="/UploadIdea">
                <Button
                    variant="outlined"
                    size="large"
                    color="secondary"
      
                  >
                    Comparte una idea
                  </Button>
              </Link>
                 
                </div>
              </div>
            </Container>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="footerBottom"></Paper>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Footer;
