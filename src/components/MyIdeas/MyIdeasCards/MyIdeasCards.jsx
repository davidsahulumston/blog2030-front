import React, { Fragment } from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Grid, CardActionArea } from "@material-ui/core";
import VR from "../../assets/VR.jpg";
import Container from "@material-ui/core/Container";
import "./MyIdeasCards.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 130,
    paddingTop: "56.25%" // 16:9
  }
}));

export default function MyIdeasCards() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed>
        <div className="ideasTitle">Tus ideas</div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={VR}
                  title="VR Headseat"
                />
                <CardContent>
                  <div className="titleCardideas">Lorem ipsum dolor</div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae aut rerum odit sunt officiis facilis cumque eos earum
                    mollitia? Quisquam nam dolorum nulla impedit, quis officiis
                    alias rem excepturi quibusdam.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={VR}
                  title="VR Headseat"
                />
                <CardContent>
                  <div className="titleCardideas">Lorem ipsum dolor</div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae aut rerum odit sunt officiis facilis cumque eos earum
                    mollitia? Quisquam nam dolorum nulla impedit, quis officiis
                    alias rem excepturi quibusdam.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={VR}
                  title="VR Headseat"
                />
                <CardContent>
                  <div className="titleCardideas">Lorem ipsum dolor</div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae aut rerum odit sunt officiis facilis cumque eos earum
                    mollitia? Quisquam nam dolorum nulla impedit, quis officiis
                    alias rem excepturi quibusdam.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={VR}
                  title="VR Headseat"
                />
                <CardContent>
                  <div className="titleCardideas">Lorem ipsum dolor</div>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae aut rerum odit sunt officiis facilis cumque eos earum
                    mollitia? Quisquam nam dolorum nulla impedit, quis officiis
                    alias rem excepturi quibusdam.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <div className="containerButton">
          <Button variant="contained" color="primary" className="button">
            Ver más
          </Button>
        </div>
      </Container>
    </Fragment>
  );
}
