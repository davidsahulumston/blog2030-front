import React, { Fragment } from "react";
import "./ImageIdeas.css";
import { Typography } from "@material-ui/core";

const ImageIdeas = () => {
  return (
    <Fragment>
      <div className="imageBackground">
        <div className="colorText">
          <Typography variant="h3">
            <span>Conoce las ideas para la comunidad TEC</span>
          </Typography>
          <Typography variant="h3">
            <span>¡Vota!</span>
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default ImageIdeas;
