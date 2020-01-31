import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import alicia from "../../assets/alicia.jpg";
import phones from "../../assets/phones.jpg";
import dron from "../../assets/dron.png";
import Container from "@material-ui/core/Container";
import "./PreviousBlogs.css";
import CardActionArea from "@material-ui/core/CardActionArea";
import Stars from "../../Rating/Stars/Stars";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 650,
    maxHeight: 800
  },
  media: {
    height: 130,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  smallCard: {
    display: "flex"
  },
  cover: {
    width: 350,
    height: 160
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 160"
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  }
}));

export default function PreviousBlogs() {
  const classes = useStyles();

  return (
    <Container fixed>
      <Typography variant="h2" className="text">
        Anteriores
      </Typography>
      <div className="container">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={phones}
              title="VR Headseat"
            />
            <CardContent>
              <Typography variant="h6">
                Smatphone tendencia de la próxima década
              </Typography>
              <div>
                <Avatar
                  aria-label="recipe"
                  alt="alicia"
                  src={alicia}
                  className={classes.avatar}
                />
                <Typography variant="subtitle1">September 14, 2016</Typography>
              </div>
              <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
                aut rerum odit sunt officiis facilis cumque eos earum mollitia?
                Quisquam nam dolorum nulla impedit, quis officiis alias rem
                excepturi quibusdam.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Stars />
          </CardContent>
        </Card>
        <div className="cards">
          <div className="space-btw-cards">
            <Card className={classes.smallCard}>
              <CardActionArea>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="secondary">
                      Tecnología
                    </Typography>
                    <Typography component="h5" variant="h5">
                      Los 8 gadgets del futuro
                    </Typography>
                  </CardContent>
                  <div className={classes.controls}>
                    <Typography variant="subtitle2">07 agosto 2019</Typography>
                  </div>
                </div>
              </CardActionArea>
              <CardMedia className={classes.cover} image={dron} title="Dron" />
            </Card>
          </div>
        </div>
      </div>
    </Container>
  );
}
