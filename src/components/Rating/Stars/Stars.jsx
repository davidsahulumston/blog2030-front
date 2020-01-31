import React, { Fragment, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "./Stars.css";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarIcon from "@material-ui/icons/Star";
import { Button, Modal, Backdrop, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { createUserVote, userVote } from "../../../actions";
import Axios from "axios";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const mapDispatchToProps = dispatch => {
  return {
    onAddVote: blog => {
      dispatch(createUserVote(blog));
    }
  };
};

function Stars(blogId, i) {
  const [state, setState] = useState({
    blogId: "",
    body: ""
  });

 // console.log(blogId);

  const classes = useStyles();
  const [stars, setStars] = useState(0);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // console.log(stars);
  // console.log(setStars);

  const confirmValue = stars => {
    //console.log(stars);
    setState((state.blogId = blogId.blogId));
    setState(
      (state.body = { userName: "America", score: stars, userId: "24431a" })
    );

    console.log(state);
    console.log("🐱‍👤");

    const userVote = state.body;

    Axios.put(
      `http://localhost:8000/api/blogImages/${blogId.blogId}/append/usersVotes`,
      userVote
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });

    const totalScore = {
      totalScore: ""
    };

    Axios.put(
      `http://localhost:8000/api/blogImages/${blogId.blogId}`,
      totalScore
    ).then(res => {
      console.log(res);
      console.log(res.data);
    });

    //this.props.onAddVote(state)
    handleClose();
  };

  return (
    <Fragment>
      <div className="containerStars">
        <ReactStars
          size={20}
          value={
            blogId.totalScore && blogId.totalVotes
              ? parseInt((blogId.totalScore / blogId.totalVotes.length).toFixed(1))
              : 0
          }
          onChange={stars => setStars(stars)}
          emptyIcon={<StarBorderIcon />}
          halfIcon={<StarHalfIcon />}
          filledIcon={<StarIcon />}
        />
        <div className="numberVotes">
          {blogId.totalScore && blogId.totalVotes
            ? (blogId.totalScore / blogId.totalVotes.length).toFixed(1)
            : 0}
          /5.0
        </div>
      </div>
      <div className="totalVotes">
        votos totales: {blogId.totalVotes ? blogId.totalVotes.length : 0}
      </div>

      <div className="voteButton">
        {stars > 0 ? (
          <Button
            variant="contained"
            color="primary"
            size="small"
            startIcon={<ThumbUpIcon />}
            onClick={handleOpen}
          >
            Votar
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled
            startIcon={<ThumbUpIcon />}
            onClick={() => handleOpen(i)}
          >
            Votar
          </Button>
        )}
      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">
              ¿Deseas votar con {stars} estrellas?{" "}
            </h2>
            <p id="transition-modal-description">
              Solo podrás votar 1 vez por esta idea
            </p>
            <div className="buttonsModal">
              <Button
                variant="contained"
                size="medium"
                color="primary"
                onClick={() => confirmValue(stars)}
              >
                Aceptar
              </Button>
              <Button
                variant="contained"
                size="medium"
                color="secondary"
                onClick={handleClose}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}

export default Stars;
