import React, { Fragment } from "react";
import "./ImageMoreIdeas.css";
import { Typography } from "@material-ui/core";

const ImageMoreIdeas = () => {
  return (
    <Fragment>
      <div className="imageBackground">
        <div className="colorText">
          <Typography variant="h3">
            <span>Conoce las ideas generales</span>
          </Typography>
          <Typography variant="h3">
            <span>¡Vota!</span>
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageMoreIdeas;
