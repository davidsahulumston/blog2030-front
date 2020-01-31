import React, { Fragment } from "react";
import "./PrincipalImage.css";
import { Typography } from "@material-ui/core";

const PrincipalImage = () => {
  return (
    <Fragment>
      <div className="imageBackground">
        <div className="colorText">
          <Typography variant="h3">
            <span> El tema del mes es TECNOLOGÍA</span>
          </Typography>
          <Typography variant="h3">
            <span>¡Participa!</span>
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default PrincipalImage;
