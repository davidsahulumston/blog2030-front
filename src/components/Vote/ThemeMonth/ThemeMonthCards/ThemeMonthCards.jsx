import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid, Container } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import VR from "../../../assets/VR.jpg";
import { CardActionArea } from "@material-ui/core";
import "./ThemeMonthCards.css";
import Stars from "../../../Rating/Stars/Stars";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function ThemeMonthCards(blog) {
  const classes = useStyles();

  let monthBlog = blog.blog.data;
  console.log(monthBlog);
  return (
    <Fragment>
      <Container fixed>
        <div className="containerThemes">
          <Grid container spacing={3}>
            {monthBlog.map((blog, i) => (
              <Grid item xs={4} key={i}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={blog.data.image[0].src}
                      title="Search"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="h2">
                        {blog.data.nameIdea}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Alicia Torres - 07 de agosto 2019
                      </Typography>
                      <Typography variant="body2" component="p">
                        {blog.data.description.substr(1, 200)}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardContent>
                    <Stars
                      blogId={blog.id}
                      totalVotes={blog.usersVotes}
                      totalScore={blog.totalScore}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="containerButton">
          <Button variant="contained" color="primary" className="button">
            Ver más
          </Button>
        </div>
      </Container>
    </Fragment>
  );
}
