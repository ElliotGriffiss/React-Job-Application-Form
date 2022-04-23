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
} from "./components/forms";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Routes>
        <Route
          path="/form/personal-details"
          element={<PersonalDetails />}
        ></Route>
        <Route
          path="/form/employment-history"
          element={<EmploymentHistory />}
        ></Route>
        <Route path="/form/education" element={<Education />}></Route>
        <Route
          path="/form/personal-statement"
          element={<PersonalStatement />}
        ></Route>
        <Route path="/form/confirmation" element={<Confirmation />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
