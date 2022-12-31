import Button from "react-bootstrap/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";

function Confirm({ values, nextStep, prevStep }) {
  const cont = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    nextStep();
  };
  const {
    title,
    CompName,
    Certificate,
    Location,
    Sdate,
    name,
    job_title,
    Nomber,
    LinkedIn,
    gmail,
    University,
    specialty,
    college,
    GPA,
    Summary
  } = values;
  console.log(values);
  return (
    <MuiThemeProvider>
      <>
        <Dialog open fullWidth maxWidth="sm">
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="University" secondary={University} />
            </ListItem>
            <ListItem>
              <ListItemText primary="CompName" secondary={CompName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="college" secondary={college} />
            </ListItem>

            <ListItem>
              <ListItemText primary="name" secondary={name} />
            </ListItem>
            <ListItem>
              <ListItemText primary="job_title" secondary={job_title} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nomber" secondary={Nomber} />
            </ListItem>

            <ListItem>
              <ListItemText primary="gmail" secondary={gmail} />
            </ListItem>

            <ListItem>
              <ListItemText primary="GPA" secondary={GPA} />
            </ListItem>

            <ListItem>
              <ListItemText primary="specialty" secondary={specialty} />
            </ListItem>
          </List>
          <br />

          <Button color="secondary" variant="contained" onClick={prevStep}>
            Back
          </Button>

          <Button color="primary" variant="contained" onClick={cont}>
            Confirm & Continue
          </Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
}

export default Confirm;
