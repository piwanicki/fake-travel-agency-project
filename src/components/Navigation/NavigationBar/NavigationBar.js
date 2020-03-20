import React from 'react';
import classes from './NavigationBar.module.css';

const NavigationBar = props => {

  return (
    <div className={classes.NavigationBar}>
      <ul>
        <li> LAST MINUTE </li>
        <li> All Inclusive </li>
        <li> Tours </li>
        <li> Our Destinations </li>
        <li> Cars </li>
        <li> Insurance </li>
        <li> Flight Tickets </li>
      </ul>
    </div>
  )

}

export default NavigationBar;