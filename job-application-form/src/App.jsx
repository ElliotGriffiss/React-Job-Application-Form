import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavigationBar from "./components/navigationBar";
import { FormRoutes } from "./components/forms";

class App extends Component {
  state = {
    Step: 0,
    CompletetionPercentage: 0,
    TotalSteps: 6,
  };

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
    const routeComponents = FormRoutes.map(({ Path, Component }, key) => (
      <Route key={key} exact path={Path} element={Component}></Route>
    ));

    return (
      <React.Fragment>
        <NavigationBar
          CompletetionPercentage={this.state.CompletetionPercentage}
        />
        <Container maxWidth="xl">
          <Routes>{routeComponents}</Routes>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
