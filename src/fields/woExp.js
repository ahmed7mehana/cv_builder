import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function WoExp({ values, handleChange, nextStep }) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <h2> WoExps </h2>
          <TextField
            placeholder="title"
            label="title"
            onChange={handleChange("title")}
            defaultValue={values.title}
            margin="normal"
            fullWidth
          />
          <br />

          <TextField
            placeholder="Enter summury about "
            label=" summury"
            onChange={handleChange("ex_d")}
            defaultValue={values.ex_d}
            margin="normal"
            fullWidth
          />

          <br />

          <TextField
            placeholder="Enter Your Company Name"
            label="Company Name"
            onChange={handleChange("CompName")}
            defaultValue={values.CompName}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Certificate Link"
            label="Certificate Link"
            onChange={handleChange("Certificate")}
            defaultValue={values.Certificate}
            margin="normal"
            fullWidth
          />
          <br />

          <TextField
            placeholder="Enter Location"
            label="Location "
            onChange={handleChange("Location")}
            defaultValue={values.Location}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="exampile (2020-2022)"
            label=" start and end date "
            onChange={handleChange("Sdate")}
            defaultValue={values.Sdate}
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

export default WoExp;
