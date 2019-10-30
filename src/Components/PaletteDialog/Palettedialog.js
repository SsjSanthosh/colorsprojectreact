import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { Link } from "react-router-dom";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default function PaletteDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [emoji, setEmoji] = React.useState(false);
  const [paletteName, setPaletteName] = React.useState("");
  const { classes, handleSubmit } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const savePalette = emoji => {
    const obj = { paletteName: paletteName, emoji: emoji.native };
    props.handleSubmit(obj);
  };
  React.useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
      return props.palettes.every(
        palette => palette.paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });

  const handlePaletteName = e => {
    setPaletteName(e.target.value);
  };
  const showEmoji = () => {
    setOpen(false);
    setEmoji(true);
  };
  return (
    <div>
      <Dialog open={emoji}>
        <Picker
          set="emojione"
          onSelect={savePalette}
          title="Pick your emoji…"
        />
      </Dialog>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Save Palette
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Enter your Palette's name
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To save your palette enter a unique and an emoji. Click anywhere
            outside to cancel.
          </DialogContentText>
          <ValidatorForm onSubmit={showEmoji}>
            <div className={classes.navForm}>
              <TextValidator
                className={classes.navInput}
                value={paletteName}
                label="Enter your palette's name"
                onChange={handlePaletteName}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "Cannot submit without name",
                  "Palette name already in use."
                ]}
              />
              <Button
                color="primary"
                className={classes.btn1}
                variant="contained"
                type="submit"
              >
                Save Palette
              </Button>
            </div>
          </ValidatorForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
