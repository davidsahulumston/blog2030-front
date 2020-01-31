import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";
import { Player } from "video-react";
//import "node_modules/video-react/dist/video-react.css";
import VR from "../../assets/VR.jpg";
import "./MainDescription.css";
import Avatar from "@material-ui/core/Avatar";
import alicia from "../../assets/alicia.jpg";
import Stars from "../../Rating/Stars/Stars";


export default function MainDescription(data) {
  // console.log(data);

  return (
    <Fragment>
      <div>
        <div className="headerDescripion">
          <div>
            <Typography>
              <span className="mainTitle">
                {data.blog.data.nameIdea}
              </span>
            </Typography>
          </div>
          <div className="containerAvatar">
            <Avatar alt="dron" src={alicia} className="avatarMain" />

            <div className="subtitleMain">
              <span>Alicia torres - 07 de agosto 2019 - Tecnologia</span>
            </div>
          </div>
        </div>

        <div className="containerVideo">
          <Player
            playsInline
            poster={VR}
            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          />
        </div>

        <div className="generalText">
          <Typography variant="h3" className="titleDescription">
            {data.blog.data.nameIdea}
          </Typography>
          <div>
            {data.blog.data.description}
          </div>
        <div className="starsDescription">
        <Stars blogId={data.blog._id} totalVotes = {data.blog.usersVotes} totalScore= {data.blog.totalScore ? data.blog.totalScore : 0 } />
        </div>
        </div>
      </div>
    </Fragment>
  );
}
