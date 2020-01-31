import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { CardMedia, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import phone from "../../../assets/phones.jpg";
import "./MoreIdeasCards.css";
import { CardActionArea, Container } from "@material-ui/core";
import Stars from "../../../Rating/Stars/Stars";
const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function MoreIdeasCards(blog) {
  const classes = useStyles();

  let blogIdea = blog.blogIdea.data;
  console.log(blogIdea);

  return (
    <Fragment>
      <Container fixed>
        <div className="containerThemes">
          <Grid container spacing={3}>
            {blogIdea.map((blog, i) => (
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
