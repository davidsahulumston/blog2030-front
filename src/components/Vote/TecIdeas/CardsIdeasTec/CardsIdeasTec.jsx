import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import phone from "../../../assets/phones.jpg";
import "./CardsIdeasTec.css";
import { CardActionArea } from "@material-ui/core";
import Stars from "../../../Rating/Stars/Stars";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function CardsIdeasTec() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className="containerThemes">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={phone} title="Search" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Headsets de VR para promover el desarrollo docente del futuro
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Alicia Torres - 07 de agosto 2019
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Stars />
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={phone} title="Search" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Headsets de VR para promover el desarrollo docente del futuro
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Alicia Torres - 07 de agosto 2019
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Stars />
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={phone} title="Search" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Headsets de VR para promover el desarrollo docente del futuro
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Alicia Torres - 07 de agosto 2019
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Stars />
          </CardContent>
        </Card>

        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia className={classes.media} image={phone} title="Search" />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Headsets de VR para promover el desarrollo docente del futuro
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Alicia Torres - 07 de agosto 2019
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Stars />
          </CardContent>
        </Card>
      </div>
      <div className="containerButton">
        <Button variant="contained" color="primary" className="button">
          Ver más
        </Button>
      </div>
    </Fragment>
  );
}
