import React from "react";
import classes from "./NavigationBar.module.scss";
import {NavigationItemsList} from './NavigationItemsList';

const NavigationBar = props => {
  return (
    <div className={classes.NavigationBarDesktop}>
    <NavigationItemsList />
    </div>
  );
};

export default NavigationBar;
