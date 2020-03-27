import React from "react";
import classes from "./NavigationBar.module.scss";

const NavigationBar = props => {
  return (
    <div className={classes.NavigationBar}>
      <ul>
        <li>
          <a href="/#">LAST MINUTE</a>
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

          <a href="/#"> Cars</a>
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
