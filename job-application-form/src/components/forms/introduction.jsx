import React, { Component } from "react";
import Button from "@mui/material/Button";

class Introduction extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Introduction</h1>
        <h2>Welcome to Company Name's job application portal</h2>
        <p>
          Thank your for you interest in job role, please fill out the follow
          forms to completed your application process.
        </p>
        <Button variant="contained">Get Started</Button>
      </>
    );
  }
}

export default Introduction;
