import React, { Fragment, useCallback, useState } from "react";
import { Container, Paper, FormControlLabel } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import "./UploadImage.css";
import {
  InputLabel,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  Button,
  IconButton
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import DropZone from "../DropZone/DropZone";
import cuid from "cuid";
import ImageList from "../ImageList/ImageList";
import DeleteIcon from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import axios from "axios";

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
    height: 32,
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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 400
    }
  }
};

const names = [
  "Tecnologia",
  "Salud",
  "Educación",
  "Innovación",
  "Energía",
  "Transporte",
  "Energía sustentable",
  "Materiales",
  "Agua"
];

export default function UploadImage() {
  const classes = useStyles();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = event => {
    setPersonName(event.target.value);
  };

  const [checked, setChecked] = useState({
    checkedTec: false,
    checkedMonth: true
  });

  const handleCheck = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  const [images, setImages] = useState([]);
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);

    acceptedFiles.map(file => {
      const reader = new FileReader();
      reader.onload = function(e) {
        setImages(prevState => [
          ...prevState,
          { id: cuid(), src: e.target.result, path: file.path, type: file.type }
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  const removeFile = file => () => {
    const newFiles = [...images];
    newFiles.splice(newFiles.indexOf(file), 1);
    setImages(newFiles);
  };

  const files = images.map(file => (
    <div key={file.path}>
      <IconButton
        onClick={removeFile(file)}
        className="individualIcon"
        aria-label="delete"
        color="secondary"
      >
        <DeleteIcon />
      </IconButton>
    </div>
  ));

  const [description, setDescription] = useState({
    desc: ""
  });
  const [nameIdea, setNameIdea] = useState({
    name: ""
  });

  const handleTextDescription = desc => event => {
    setDescription({ ...description, [desc]: event.target.value });
  };

  const handleTextName = name => event => {
    setNameIdea({ ...nameIdea, [name]: event.target.value });
  };

  const uploadBlogImage = () => {
    console.log(images);
    console.log(personName);
    console.log(description.desc);
    console.log(checked.checkedMonth);
    console.log(nameIdea.name);
    const data = {
      nameIdea: nameIdea.name,
      tags: personName,
      timeStamp: Date(Date.now()),
      isMonthIdea: checked.checkedMonth,
      description: description.desc,
      image: images
    };
    axios.post(`http://localhost:8000/api/blogImages`, { data }).then(res => {
      console.log(res);
    });

  };

  return (
    <Fragment>
      <Container fixed>
        <Paper>
          <Container fixed>
            <div className="titleUploadVideo">Sube tus imagenes</div>

            <div>
              {checked.checkedMonth ? (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedTec}
                      onChange={handleCheck("checkedTec")}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      value="checkedTec"
                      disabled
                    />
                  }
                  label="Es una idea Tec"
                />
              ) : (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedTec}
                      onChange={handleCheck("checkedTec")}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      value="checkedTec"
                    />
                  }
                  label="Es una idea Tec"
                />
              )}
              {checked.checkedTec ? (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedMonth}
                      onChange={handleCheck("checkedMonth")}
                      icon={<EmojiObjectsOutlinedIcon />}
                      checkedIcon={<EmojiObjectsIcon />}
                      value="checkedMonth"
                      disabled
                    />
                  }
                  label="Es una idea del Tema del mes"
                />
              ) : (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.checkedMonth}
                      onChange={handleCheck("checkedMonth")}
                      icon={<EmojiObjectsOutlinedIcon />}
                      checkedIcon={<EmojiObjectsIcon />}
                      value="checkedMonth"
                    />
                  }
                  label="Es una idea del Tema del mes"
                />
              )}
            </div>
            <div className="containerUpload">
              <div>
                <div className="containerUploadInputs">
                  <div className="alignInputs">
                    <TextField
                      id="outlined-with-placeholder"
                      label="Nombre"
                      placeholder="Nombre del  proyecto"
                      variant="outlined"
                      className="field-name"
                      value={nameIdea.name}
                      onChange={handleTextName("name")}
                    />
                  </div>

                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel>Tags</InputLabel>
                      <Select
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={<BootstrapInput id="select-multiple-checkbox" />}
                        renderValue={selected => selected.join(", ")}
                        MenuProps={MenuProps}
                        className="fieldTags"
                      >
                        {names.map(name => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                </div>

                <div>
                  <TextField
                    id="outlined-multiline-static"
                    label="Descripción"
                    multiline
                    rows="8"
                    margin="normal"
                    placeholder="Comienza a escribir tu descripción"
                    variant="outlined"
                    className="textUpload"
                    value={description.desc}
                    onChange={handleTextDescription("desc")}
                  />
                    <div className="sizeElement">
                      <DropZone
                        onDrop={onDrop}
                        accept={"image/*"}
                        minSize={0}
                        maxSize={2097152}
                      />
                      <ImageList images={images} />
                      <span>{files}</span>
                    </div>
                  
                  <div className="buttonComments">
                    <Button
                      variant="contained"
                      color="primary"
                      className="button"
                      onClick={() => uploadBlogImage()}
                    >
                      Enviar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Paper>
      </Container>
    </Fragment>
  );
}
