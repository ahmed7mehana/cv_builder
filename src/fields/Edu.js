import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function Edu({ values, handleChange, nextStep }) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <h2> Education </h2>
          <TextField
            placeholder="University "
            label="Enter your University "
            onChange={handleChange("University ")}
            defaultValue={values.University}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="the college "
            label="the college"
            onChange={handleChange("college")}
            defaultValue={values.college}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your specialty "
            label="specialty"
            onChange={handleChange("specialty")}
            defaultValue={values.specialty}
            margin="normal"
            fullWidth
          />
          <br />

          <TextField
            placeholder="Enter your GPA"
            label="GPA "
            onChange={handleChange("GPA")}
            defaultValue={values.GPA}
            margin="normal"
            fullWidth
          />
          <br />

          <Button color="primary" variant="contained" onClick={cont}>
            Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
}

export default Edu;
