import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./NavBar.css";
import Avatar from "@material-ui/core/Avatar";
import alicia from "../../assets/alicia.jpg";
import logoTec from "../../assets/logo-tec.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.black, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 100,
      "&:focus": {
        width: 200
      }
    }
  },
  avatar: {
    margin: 10
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className="background" position="static">
        <Toolbar>
          <Link to="/">
            <img className="logoTec" src={logoTec} alt="logoTec" />
          </Link>
          <div className="menu">
            <Typography variant="h6" className="text">
              <Link className="text-reset" to="/model2030">
                Modelo 2030
              </Link>
            </Typography>
            <Typography variant="h6" className="text">
              <Link className="text-reset" to="/vote">
                Conoce + ideas
              </Link>
            </Typography>
            <Typography variant="h6" className="text">
              Agenda
            </Typography>
            <Typography variant="h6" className="text">
              <Link className="text-reset" to="/myIdeas">
                Tus ideas
              </Link>
            </Typography>
          </div>
          <Link className="text-reset" to="/uploadIdea">
            <Button variant="contained" color="primary" className="button">
              !Compartir idea!
            </Button>
          </Link>
          <Avatar alt="alicia" src={alicia} className={classes.avatar} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Buscar..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
