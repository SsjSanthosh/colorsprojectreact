import React from "react";
import clsx from "clsx";
import PaletteformNav from "../PaletteformNav/PaletteformNav";
import { useTheme } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import arrayMove from "array-move";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";

import { useStyles } from "./styles.js";
import DraggableList from "../Draggablelist/DraggableList";

export default function NewPalette(props) {
  const maxColors = 20;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [curColor, setCurColor] = React.useState("teal");
  const [allColors, setNewColor] = React.useState(props.palettes[0].colors);
  const paletteFull = allColors.length >= maxColors;
  const [newName, setNewName] = React.useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const clearPalette = () => {
    setNewColor([]);
  };

  const addRandomColor = () => {
    const range = props.palettes.map(p => p.colors).flat();
    const idx = Math.floor(Math.random() * 179);
    const newColors = [...allColors, range[idx]];
    console.log(range);
    console.log(range[idx]);
    setNewColor(newColors);
  };

  const addNewColor = newColor => {
    const obj = { color: curColor, name: newName };
    const newColors = [...allColors, obj];

    setNewColor(newColors);
  };

  const changeColor = color => {
    setCurColor(color.hex);
  };

  const handleSubmit = obj => {
    const name = obj.paletteName;

    const id = name.toLowerCase().replace(/ /g, "-");
    const palette = {
      paletteName: name,
      colors: allColors,
      id: id,
      emoji: obj.emoji
    };
    console.log("object", palette);
    props.addPalette(palette);
    props.history.push("/");
    console.log("after", props.palettes);
  };

  const handleDelete = name => {
    const newColors = allColors.filter(color => color.name !== name);
    setNewColor(newColors);
  };
  const changeName = e => {
    setNewName(e.target.value);
  };
  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newColors = arrayMove(allColors, oldIndex, newIndex);
    setNewColor(newColors);
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return allColors.every(
        color => color.name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return allColors.every(color => color.color !== curColor);
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return props.palettes.every(
        palette => palette.paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <PaletteformNav
        palettes={props.palettes}
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
        handleSubmit={handleSubmit}
      />
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4" className={classes.drawerTitle}>
          Design your palette!
        </Typography>

        <div className={classes.btnDiv}>
          <Button
            variant="contained"
            className={classes.drawerBtn}
            color="secondary"
            onClick={clearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="contained"
            className={classes.drawerBtn}
            disabled={paletteFull}
            color={paletteFull ? "grey" : "primary"}
            onClick={addRandomColor}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={curColor}
          className={classes.colorpicker}
          onChangeComplete={color => changeColor(color)}
        />
        <ValidatorForm onSubmit={addNewColor} className={classes.colorForm}>
          <TextValidator
            value={newName}
            onChange={changeName}
            className={classes.colorInput}
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "Enter a color name",
              "Color name taken",
              "Color already used"
            ]}
            placeholder="Enter a name for your color"
          />
          <Button
            variant="contained"
            type="submit"
            className={classes.addBtn}
            style={{ backgroundColor: paletteFull ? "grey" : curColor }}
            disabled={paletteFull}
          >
            {paletteFull ? "Palette Full" : "Add color"}
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.colorDiv}>
          <DraggableList
            colors={allColors}
            handleDelete={handleDelete}
            axis="xy"
            onSortEnd={onSortEnd}
          ></DraggableList>
        </div>
      </main>
    </div>
  );
}
