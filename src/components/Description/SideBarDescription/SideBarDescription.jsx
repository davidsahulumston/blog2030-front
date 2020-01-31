import React, { Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import dron from "../../assets/dron.png";
import { Typography, Card, CardMedia, CardActionArea } from "@material-ui/core";
import "./SideBarDescription.css";
import Chip from "@material-ui/core/Chip";
import alexa from "../../assets/alexa.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function SideBarDescription(blog) {
  const classes = useStyles();
  let value = "tecnologia";

  let tags = blog.blog.data.tags;
  console.log(tags);
  return (
    <Fragment>
      <div className="upperText">
        <span className="upperTitle">Tags relacionados -</span>
      </div>
      <div className="separationChips">
        {tags.map((i, tags) => (
          <Chip key={i} className="chipSide" label={tags} />
        ))}
      </div>

      <span className="upperTitle">Lo más votado -</span>
      <div className="content">
        <Avatar alt="dron" src={dron} className="bigAvatar" />
        <Typography variant="h6">
          ¿Son seguros los asistentes digitales?{"\n"}
          <span className="subtitle">Alberto Guerrero 07 agosto 2019</span>
        </Typography>
      </div>
      <div className="content">
        <Avatar alt="dron" src={dron} className="bigAvatar" />
        <Typography variant="h6">
          ¿Son seguros los asistentes digitales?
          <span className="subtitle">Alberto Guerrero 07 agosto 2019</span>
        </Typography>
      </div>
      <div className="content">
        <Avatar alt="dron" src={dron} className="bigAvatar" />
        <Typography variant="h6">
          ¿Son seguros los asistentes digitales?{"\n"}
          <span className="subtitle">Alberto Guerrero 07 agosto 2019</span>
        </Typography>
      </div>
      <div className="upperText">
        <span className="upperTitle">Relacionados -</span>
      </div>
      <div>
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={alexa}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <div> ¿Son seguros los asistentes digitales? </div>
        <div className="subtitle">Alberto Guerrero 07 agosto 2019</div>
      </div>
    </Fragment>
  );
}
