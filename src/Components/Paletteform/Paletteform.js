import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ChromePicker } from "react-color";
import { Button } from "@material-ui/core";
import Dragbox from "../Draggable boxes/Dragbox";
import { useStyles } from "./styles.js";

export default function NewPalette() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [curColor, setCurColor] = React.useState("teal");
  const [allColors, setNewColor] = React.useState([
    { color: "blue", name: "blue" }
  ]);
  const [newName, setNewName] = React.useState("");
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = newColor => {
    const obj = { color: curColor, name: newName };
    const newColors = [...allColors, obj];
    console.log("called");
    setNewColor(newColors);
    console.log(allColors);
  };

  const changeColor = color => {
    setCurColor(color.hex);
  };

  const changeName = e => {
    setNewName(e.target.value);
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
  });
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.createTitle} noWrap>
            Create your own palette!
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Typography variant="h4">Design your palette!</Typography>
        <div className={classes.btnDiv}>
          <Button variant="contained" color="secondary">
            Clear Palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={curColor}
          onChangeComplete={color => changeColor(color)}
        />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
            value={newName}
            onChange={changeName}
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
            style={{ backgroundColor: curColor }}
          >
            Add color
          </Button>
        </ValidatorForm>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.colorDiv}>
          {allColors.map(color => (
            <Dragbox color={color.color}></Dragbox>
          ))}
        </div>
      </main>
    </div>
  );
}
