import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavigationBar from "./components/navigationBar";
import {
  PersonalDetails,
  EmploymentHistory,
  Education,
  PersonalStatement,
  Confirmation,
  Introduction,
} from "./components/forms";

class App extends Component {
  state = { Step: 0, CompletetionPercentage: 0, TotalSteps: 6 };

  handleMoveNextStep = () => {
    let step = [this.state.Step];
    step += 1;
    step = step < 0 ? 0 : step;

    let completetionPercentage = (step / this.state.TotalSteps) * 100;

    this.setState({
      Step: step,
      CompletetionPercentage: completetionPercentage,
    });
  };

  handleMoveBackStep = () => {
    let step = [this.state.Step];
    step -= 1;
    step = step < 0 ? 0 : step;
    this.setState({ Step: step });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar
          CompletetionPercentage={this.state.CompletetionPercentage}
        />
        <Routes>
          <Route path="/" element={<Introduction />}></Route>
          <Route path="/personal-details" element={<PersonalDetails />}></Route>
          <Route
            path="/employment-history"
            element={<EmploymentHistory />}
          ></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route
            path="/personal-statement"
            element={<PersonalStatement />}
          ></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
