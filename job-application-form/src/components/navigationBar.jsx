import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const pages = [
  "Introduction",
  "Personal Details",
  "Employment History",
  "Education",
  "Personal Statement",
  "Confirmation",
];

class NavigationBar extends Component {
  static propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    CompletetionPercentage: PropTypes.number.isRequired,
  };

  render() {
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box sx={{ mr: 2, width: "180px" }}>
                <Typography variant="h6" noWrap component="div">
                  Company Name
                </Typography>
              </Box>
              <Box sx={{ mr: 1, width: "Calc(100% - 360px);" }}>
                <LinearProgress
                  sx={{ backgroundColor: "#fff" }}
                  variant="determinate"
                  value={this.props.CompletetionPercentage}
                />
              </Box>
              <Box sx={{ width: "180px", ml: 2 }}>
                <Typography variant="h6">
                  {this.props.CompletetionPercentage}%
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  }
}

export default NavigationBar;
