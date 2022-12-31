import React, { Component } from "react";
import Confirm from "../fields/Confirm";
import Edu from "../fields/Edu";
import Info from "../fields/Info";
import WoExp from "../fields/woExp";
import Technical from "../fields/Technical";
import Resume from "../result/Resume";
import Header from "../Header/Header";

export class UserForm extends Component {
  state = {
    step: 1,
    title: "",
    CompName: "",
    Certificate: "",
    Location: "",
    Sdate: "",
    name: "",
    job_title: "",
    Nomber: "",
    LinkedIn: "",
    gmail: "",
    University: "",
    college: "",
    specialty: "",
    GPA: "",
    Summary: "",
    Technical_1: "",
    Technical_2: "",
    Technical_3: "",
    Technical_4: "",
    Technical_5: "",
    ex_d: ""
  };
  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
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
      Technical_1,
      Technical_2,
      Technical_3,
      Technical_4,
      Technical_5,
      ex_d
    } = this.state;
    const values = {
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
      Technical_1,
      Technical_2,
      Technical_3,
      Technical_4,
      Technical_5,
      ex_d
    };
    switch (step) {
      case 1:
        return <Header nextStep={this.nextStep} />;
      case 2:
        return (
          <Info
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <WoExp
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return (
          <Technical
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 5:
        return (
          <Edu
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );

      case 6:
        return (
          <Confirm
            values={values}
            handleChange={this.handleChange}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
          />
        );
      case 7:
        return <Resume values={values} />;
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
