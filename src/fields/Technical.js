import Button from "react-bootstrap/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function Technical({ values, handleChange, nextStep }) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <h2> Technical </h2>
          <TextField
            placeholder="Technical skills like (css - qc)"
            label="Technical  "
            onChange={handleChange("Technical_1")}
            defaultValue={values.Technical_1}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Technical skills like (css - qc)"
            label="Technical  "
            onChange={handleChange("Technical_2")}
            defaultValue={values.Technical_2}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Technical skills like (css - qc)"
            label="Technical  "
            onChange={handleChange("Technical_3")}
            defaultValue={values.Technical_3}
            margin="normal"
            fullWidth
          />
          <br />

          <TextField
            placeholder="Technical skills like (css - qc)"
            label="Technical  "
            onChange={handleChange("Technical_4")}
            defaultValue={values.Technical_4}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Technical skills like (css - qc)"
            label="Technical  "
            onChange={handleChange("Technical_5")}
            defaultValue={values.Technical_5}
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

export default Technical;
