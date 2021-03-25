import React from "react";
import styled from "styled-components";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Headerplus() {
  return (
    <div>
      <nav class="upper-header-bg">
        <h1 class="upper-hearder">Join Gym @3999rs</h1>
      </nav>

      <NavWrapper>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <FitnessCenterIcon />
          <h1 class="logo-text">Real Steel Fitness Club</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/workoutplans">
                  Workout Plans
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/trials">
                  Trials
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/contactus">
                  Contact Us <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="btn-login btn" to="/join">
                  <AccountBoxIcon /> Join Now
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </NavWrapper>
    </div>
  );
}

export default Headerplus;

const NavWrapper = styled.nav`
  margin-top: 0;
  padding: 0;
`;
