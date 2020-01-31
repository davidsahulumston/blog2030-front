import React, { Fragment } from "react";
import {
  Paper,
  TextField,
  Typography,
  Container,
  Button,
  Avatar
} from "@material-ui/core";
import "./Comments.css";
import alicia from "../../assets/alicia.jpg";
import FeedbackIcon from '@material-ui/icons/Feedback';


export default function Comments() {
  return (
    <Fragment>
      <div className="content">
        <Avatar alt="dron" src={alicia} className="avatarMain" />
        <Typography variant="h6">
          Alicia Monroe
          <div className="subtitle">07 agosto 2019</div>
        </Typography>
      </div>
      <div className="comments">
        <div className="answerComment">
          <Button size="small"><FeedbackIcon className="feedBackIcon"/>Responder</Button>
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quaerat
        necessitatibus esse itaque quod sapiente sint, omnis similique, eligendi
        distinctio officiis saepe doloremque reprehenderit ipsum exercitationem
        laboriosam perferendis dolorum cum?
      </div>
      <Paper className="sizeContent">
        <Container fixed>
          <Typography variant="h4">Comentar</Typography>
          <TextField
            id="outlined-multiline-static"
            label="Escribe tu comentario"
            multiline
            rows="8"
            className="textMessage"
            margin="normal"
            variant="outlined"
          />
          <div className="buttonComments">
            <Button variant="contained" color="primary" className="button">
              Enviar
            </Button>
          </div>
        </Container>
      </Paper>
    </Fragment>
  );
}
