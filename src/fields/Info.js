import Button from "react-bootstrap/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function Info({ values, handleChange, nextStep }) {
  const cont = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Enter User Details" />
          <h2> info </h2>
          <TextField
            placeholder="Name"
            label="Enter your Name"
            onChange={handleChange("name")}
            defaultValue={values.name}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Job title"
            label="Job title"
            onChange={handleChange("job_title")}
            defaultValue={values.job_title}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Nomber "
            label="Nomber"
            onChange={handleChange("Nomber")}
            defaultValue={values.Nomber}
            margin="normal"
            fullWidth
          />
          <br />

          <TextField
            placeholder="Enter LinkedIn"
            label="LinkedIn "
            onChange={handleChange("LinkedIn")}
            defaultValue={values.LinkedIn}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="gmail"
            label=" gmail "
            onChange={handleChange("gmail")}
            defaultValue={values.gmail}
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

export default Info;
