import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Grid, CardActionArea } from "@material-ui/core";
import alicia from "../../assets/alicia.jpg";
import VR from "../../assets/VR.jpg";
import Container from "@material-ui/core/Container";
import "./PopularBlogs.css";
import Button from "@material-ui/core/Button";
import Stars from "../../Rating/Stars/Stars";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { userVote } from "../../../actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    maxHeight: 570
  },
  media: {
    paddingTop: "56.25%" // 16:9
  },
  content: {
    maxHeight: 200
  }
}));

const mapStatetoProps = state => {
  return {
    blogs: state.blogs,
    image: state.blogs.data,
    description: state.blogs.data,
    id: state.blogs.data,
    totalVotes: state.blogs.data,
    totalScore: state.blogs.data
  };
};

function PopularBlogs({
  blogs,
  image,
  description,
  id,
  totalVotes,
  totalScore
}) {
  const classes = useStyles();

  // console.log(blogs);
  if (id) {
    id = id.map(({ _id }) => _id);
  }
  if (totalVotes) {
    totalVotes = totalVotes.map(({ usersVotes }) => usersVotes);
  }

  if (totalScore) {
    totalScore = totalScore.map(({ totalScore }) => totalScore);
  }

  if (image) {
    // let firstImage = image.map(({ data: { image } }) => image[0].src[2]);
    //console.log(image.map(({ data: { image } }) => image[0].src));
  }
  if (!blogs.length && blogs.length !== undefined) {
    return <CircularProgress />;
  }

  return (
    <Container fixed>
      <Typography variant="h2" className="text">
        Blogs populares
      </Typography>
      <Grid container spacing={3}>
        {blogs.data.map((blog, i) => (
          <Grid item xs={4} key={i}>
            <Card className={classes.card}>
              <CardHeader
                avatar={
                  <Avatar
                    aria-label="recipe"
                    alt="alicia"
                    src={alicia}
                    className={classes.avatar}
                  />
                }
                title="alicia"
                subheader={blog.timeStamp}
              />
              <CardActionArea>
                <Link className="text-reset" to={`/description/${id[i]}`}>
                  <CardMedia
                    className={classes.media}
                    image={image
                      .map(({ data: { image } }) => image[0].src)[i].toString()}
                    title={blog.nameIdea || blog.data.nameIdea}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {blog.data.nameIdea}
                    </Typography>
                    <Typography
                      className={classes.content}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {
                        description.map(({ data: { description } }) =>
                          description.substr(1, 200)
                        )[i]
                      }
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
              <CardContent>
                <Stars
                  blogId={id[i]}
                  index={i}
                  totalVotes={totalVotes[i]}
                  totalScore={totalScore[i]}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className="containerButton">
        <Button variant="contained" color="primary" className="button">
          Ver más
        </Button>
      </div>
    </Container>
  );
}

export default connect(
  mapStatetoProps,
  null
)(PopularBlogs);
