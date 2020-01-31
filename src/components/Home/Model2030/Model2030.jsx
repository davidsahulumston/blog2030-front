import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import search from "../../assets/search.png";
import { Container } from "@material-ui/core";
import "./Model2030.css";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function ModelsCard() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Typography variant="h2" className="text">
        Modelo 2030
      </Typography>
      <div className="container">
        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={search}
              title="Search"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Investigación
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita totam repellendus aliquam asperiores ipsam ipsa sed,
                accusamus amet ad. Deserunt quas quibusdam debitis autem error
                beatae? Animi quos doloribus ipsa.
              </Typography>
            </CardContent>
          <CardActions>
            <div className="buttonDetails">
              <Button size="small" color="primary">
                Ver detalles
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={search}
              title="Search"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Ciclo de innovación
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita totam repellendus aliquam asperiores ipsam ipsa sed,
                accusamus amet ad. Deserunt quas quibusdam debitis autem error
                beatae? Animi quos doloribus ipsa.
              </Typography>
            </CardContent>
          <CardActions>
            <div className="buttonDetails">
              <Button size="small" color="primary">
                Ver detalles
              </Button>
            </div>
          </CardActions>
        </Card>

        <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={search}
              title="Search"
            />
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                Insight interno
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita totam repellendus aliquam asperiores ipsam ipsa sed,
                accusamus amet ad. Deserunt quas quibusdam debitis autem error
                beatae? Animi quos doloribus ipsa.
              </Typography>
            </CardContent>
          <CardActions>
            <div className="buttonDetails">
              <Button size="small" color="primary">
                Ver detalles
              </Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </Container>
  );
}
