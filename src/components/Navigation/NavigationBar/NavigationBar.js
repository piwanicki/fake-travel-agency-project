import React from "react";
import classes from "./NavigationBar.module.scss";
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = props => {
  return (
    <div className={classes.NavigationBar}>
      <ul>
        <li>
          <Link to="/lastMinute">LAST MINUTE <FontAwesomeIcon icon={faClock} /></Link>
        </li>
        <li>
          <a href="/#"> All Inclusive </a>
        </li>
        <li>
          <a href="/#"> Tours</a>
        </li>
        <li>

          <a href="/#"> Our Destinations </a>
        </li>
        <li>

          <Link to={'/offerServices/cars'}>Cars </Link>
        </li>
        <li>

          <a href="/#"> Insurance</a>
        </li>
        <li>

          <a href="/#"> Flight Tickets </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
