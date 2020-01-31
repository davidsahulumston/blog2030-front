import React, { Fragment } from "react";
import { Container } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import UploadVideo from "../UploadVideo/UploadVideo";
import UploadImage from "../UploadImage/UploadImage";
import UploadAudio from "../UploadAudio/UploadAudio";
import "./DropDown.css";

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    }
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
}));

export default function DropDown() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = event => {
    //setAge(event.target.value);
    if(parseInt(event.target.value) === 1) {
        setAge(<UploadVideo />);
    } else if (parseInt(event.target.value) === 2) {
        setAge(<UploadImage />);
    } else if(parseInt(event.target.value) === 3) {
        setAge(<UploadAudio />);
    } else {
        setAge('Selecciona el tipo de archivo a subir')
    }

  };

  return (
    <Fragment>
      <Container fixed>
        <div className="titleUploadIdea">¡Hola Alicia!</div>
        <div className="subtitleUploadIdea">
          Vemos que quieres compartir una idea con la comunidad 2030. ¡Encuentra
          la mejor opción para subir tus archivos y compartir tu proyecto!
        </div>
        <div className="centerDropDown">
          <form className={classes.root} autoComplete="off">
            <FormControl className="formUploadIdea">
              <InputLabel>Tipo de contenido</InputLabel>
              <NativeSelect
                value={age}
                onChange={handleChange}
                input={<BootstrapInput name="age" />}
              >
                <option value="" />
                <option value={1}>Video</option>
                <option value={2}>Imagen</option>
                <option value={3}>Audio</option>
              </NativeSelect>
            </FormControl>
          </form>
        </div>
        <div>
          <h2>{age}</h2>
        </div>
      </Container>
    </Fragment>
  );
}
